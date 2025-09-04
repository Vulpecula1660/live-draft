// UI管理模組
class DraftUI {
    constructor(game) {
        this.game = game;
        this.selectedPlayerId = null;
        this.initEventListeners();
    }

    // 初始化事件監聽器
    initEventListeners() {
        // 玩家數量變更
        document.getElementById('player-count').addEventListener('change', (e) => {
            this.generatePlayerInputs(parseInt(e.target.value));
        });

        // 開始遊戲
        document.getElementById('start-game-btn').addEventListener('click', () => {
            this.startGame();
        });

        // 新遊戲
        document.getElementById('new-game-btn').addEventListener('click', () => {
            this.newGame();
        });

        // 搜尋功能
        document.getElementById('search-input').addEventListener('input', (e) => {
            this.filterDraftPool(e.target.value);
        });

        // 確認對話框
        document.getElementById('confirm-yes').addEventListener('click', () => {
            this.confirmSelection();
        });

        document.getElementById('confirm-no').addEventListener('click', () => {
            this.cancelSelection();
        });

        // 點擊背景關閉模態框
        document.getElementById('confirmation-modal').addEventListener('click', (e) => {
            if (e.target.id === 'confirmation-modal') {
                this.cancelSelection();
            }
        });

        document.getElementById('image-modal').addEventListener('click', (e) => {
            if (e.target.id === 'image-modal') {
                this.closeImageModal();
            }
        });

        // 初始化玩家輸入
        this.generatePlayerInputs(4);
    }

    // 生成玩家輸入欄位
    generatePlayerInputs(count) {
        const container = document.getElementById('players-config');
        container.innerHTML = '';

        for (let i = 1; i <= count; i++) {
            const div = document.createElement('div');
            div.className = 'player-input';
            div.innerHTML = `
                <i class="fas fa-user"></i>
                <input type="text" placeholder="玩家 ${i} 名稱" value="玩家 ${i}" id="player-${i}">
            `;
            container.appendChild(div);
        }
    }

    // 開始遊戲
    startGame() {
        const playerCount = parseInt(document.getElementById('player-count').value);
        const players = [];

        // 收集玩家名稱
        for (let i = 1; i <= playerCount; i++) {
            const name = document.getElementById(`player-${i}`).value.trim();
            if (!name) {
                alert(`請輸入玩家 ${i} 的名稱`);
                return;
            }
            players.push(name);
        }

        // 檢查是否有重複名稱
        const uniqueNames = new Set(players);
        if (uniqueNames.size !== players.length) {
            alert('玩家名稱不能重複');
            return;
        }

        // 初始化遊戲
        this.game.initGame(players);
        this.game.startDraft();
        this.showPage('draft-page');
        this.updateDraftPage();
    }

    // 新遊戲
    newGame() {
        this.game.resetGame();
        this.showPage('setup-page');
    }

    // 顯示指定頁面
    showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    }

    // 更新選秀頁面
    updateDraftPage() {
        this.updateDraftStatus();
        this.updateDraftOrder();
        this.updateSelectedPlayers();
        this.renderDraftPool();
    }

    // 更新選秀狀態
    updateDraftStatus() {
        const currentPlayer = this.game.getCurrentPlayer();
        if (currentPlayer) {
            document.getElementById('current-round').textContent = this.game.currentRound;
            document.getElementById('current-player-name').textContent = currentPlayer.name;
        }

        // 更新進度條
        const progress = this.game.getProgress();
        document.getElementById('progress-fill').style.width = `${progress}%`;

        // 檢查遊戲是否結束
        if (this.game.gameStatus === 'finished') {
            this.showResults();
        }
    }

    // 更新選秀順序
    updateDraftOrder() {
        const container = document.getElementById('draft-order');
        const order = this.game.getDraftOrder();
        const currentIndex = order.findIndex(item => item.isCurrent);
        
        // 顯示當前選擇附近的順序
        const startIndex = Math.max(0, currentIndex - 2);
        const endIndex = Math.min(order.length, currentIndex + 8);
        const visibleOrder = order.slice(startIndex, endIndex);

        container.innerHTML = visibleOrder.map(item => `
            <div class="draft-order-item ${item.isCurrent ? 'current' : ''}">
                <span class="round">R${item.round}</span>
                <span>${item.playerName}</span>
            </div>
        `).join('');
    }

    // 更新已選擇的玩家
    updateSelectedPlayers() {
        const container = document.getElementById('selected-players');
        const selectedPlayers = this.game.getSelectedPlayers();

        container.innerHTML = selectedPlayers.map(player => `
            <div class="selected-player">
                <img src="${player.image}" alt="${player.name}" onerror="this.style.display='none'">
                <div>
                    <div>${player.name}</div>
                    <small>R${player.selectedRound} - ${this.game.players.find(p => p.id === player.selectedBy)?.name || ''}</small>
                </div>
            </div>
        `).join('');
    }

    // 渲染選秀池
    renderDraftPool(filteredPool = null) {
        const container = document.getElementById('draft-pool');
        const pool = filteredPool || this.game.draftPool;
        
        // 將已選擇的新秀排到最後
        const sortedPool = [...pool].sort((a, b) => {
            if (a.isSelected && !b.isSelected) return 1;
            if (!a.isSelected && b.isSelected) return -1;
            return 0;
        });

        container.innerHTML = sortedPool.map(player => `
            <div class="draft-card ${player.isSelected ? 'selected' : ''}" 
                 onclick="${player.isSelected ? '' : `ui.selectPlayer('${player.id}')`}">
                <img src="${player.image}" alt="${player.name}" onerror="this.style.display='none'" 
                     onclick="event.stopPropagation(); ui.showImageModal('${player.image}', '${player.name}')">
                <h4>${player.name}</h4>
                <a href="${player.instagram}" target="_blank" onclick="event.stopPropagation()">
                    <i class="fab fa-instagram"></i> Instagram
                </a>
            </div>
        `).join('');
    }

    // 選擇新秀
    selectPlayer(playerId) {
        if (this.game.gameStatus !== 'playing') return;

        const player = this.game.draftPool.find(p => p.id === playerId);
        if (!player || player.isSelected) return;

        this.selectedPlayerId = playerId;
        document.getElementById('confirm-player-name').textContent = player.name;
        document.getElementById('confirmation-modal').classList.add('active');
    }

    // 確認選擇
    confirmSelection() {
        if (this.selectedPlayerId) {
            const success = this.game.selectPlayer(this.selectedPlayerId);
            if (success) {
                this.updateDraftPage();
            }
        }
        this.cancelSelection();
    }

    // 取消選擇
    cancelSelection() {
        this.selectedPlayerId = null;
        document.getElementById('confirmation-modal').classList.remove('active');
    }

    // 顯示圖片模態框
    showImageModal(imageSrc, playerName) {
        document.getElementById('modal-image').src = imageSrc;
        document.getElementById('modal-player-name').textContent = playerName;
        document.getElementById('image-modal').classList.add('active');
    }

    // 關閉圖片模態框
    closeImageModal() {
        document.getElementById('image-modal').classList.remove('active');
    }

    // 過濾選秀池
    filterDraftPool(query) {
        const filteredPool = this.game.searchPlayers(query);
        this.renderDraftPool(filteredPool);
    }

    // 顯示結果
    showResults() {
        this.showPage('results-page');
        this.renderResults();
    }

    // 渲染結果
    renderResults() {
        const container = document.getElementById('results-content');
        
        container.innerHTML = this.game.players.map(player => {
            const selectedPlayers = player.selectedPlayers.map(playerId => 
                this.game.draftPool.find(p => p.id === playerId)
            ).filter(p => p);

            return `
                <div class="team-result">
                    <h3>${player.name} 的團隊</h3>
                    ${selectedPlayers.map((p, index) => `
                        <div class="team-member">
                            <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'">
                            <div class="team-member-info">
                                <h5>${p.name}</h5>
                                <span>第 ${p.selectedRound} 輪選擇</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }).join('');
    }

    // 根據遊戲狀態初始化UI
    initializeFromGameState() {
        switch (this.game.gameStatus) {
            case 'setup':
                this.showPage('setup-page');
                break;
            case 'playing':
                this.showPage('draft-page');
                this.updateDraftPage();
                break;
            case 'finished':
                this.showPage('results-page');
                this.renderResults();
                break;
        }
    }
}