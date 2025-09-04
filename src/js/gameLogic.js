// 遊戲邏輯核心模組
class DraftGame {
    constructor() {
        this.gameState = {
            gameStatus: 'setup',
            currentRound: 1,
            currentPlayerIndex: 0,
            totalRounds: 5,
            players: [],
            draftPool: [],
            draftHistory: []
        };
        this.loadGameState();
    }

    // 初始化遊戲
    initGame(players) {
        this.gameState = {
            gameStatus: 'setup',
            currentRound: 1,
            currentPlayerIndex: 0,
            totalRounds: 5,
            players: players.map((name, index) => ({
                id: `player_${index}`,
                name: name,
                selectedPlayers: [],
                currentTurn: index === 0
            })),
            draftPool: getDraftPool(),
            draftHistory: []
        };
        this.saveGameState();
    }

    // 開始選秀
    startDraft() {
        this.gameState.gameStatus = 'playing';
        this.gameState.currentPlayerIndex = 0;
        this.gameState.currentRound = 1;
        this.updateCurrentPlayer();
        this.saveGameState();
    }

    // 更新當前玩家
    updateCurrentPlayer() {
        this.gameState.players.forEach((player, index) => {
            player.currentTurn = index === this.gameState.currentPlayerIndex;
        });
    }

    // 選擇新秀
    selectPlayer(playerId) {
        const player = this.draftPool.find(p => p.id === playerId);
        const currentPlayer = this.getCurrentPlayer();
        
        if (!player || player.isSelected || !currentPlayer) {
            return false;
        }

        // 標記新秀為已選擇
        player.isSelected = true;
        player.selectedBy = currentPlayer.id;
        player.selectedRound = this.gameState.currentRound;

        // 添加到玩家的選擇列表
        currentPlayer.selectedPlayers.push(playerId);

        // 記錄選秀歷程
        this.gameState.draftHistory.push({
            round: this.gameState.currentRound,
            playerName: currentPlayer.name,
            selectedPlayer: player.name,
            timestamp: new Date().toISOString()
        });

        // 檢查是否需要進入下一輪
        this.nextTurn();
        this.saveGameState();
        return true;
    }

    // 下一輪
    nextTurn() {
        const totalPlayers = this.gameState.players.length;
        
        // 蛇形選秀邏輯
        if (this.gameState.currentRound % 2 === 1) {
            // 奇數輪：正向 (1→N)
            if (this.gameState.currentPlayerIndex < totalPlayers - 1) {
                this.gameState.currentPlayerIndex++;
            } else {
                // 進入下一輪
                this.gameState.currentRound++;
                // 偶數輪保持最後一個玩家開始
            }
        } else {
            // 偶數輪：反向 (N→1)
            if (this.gameState.currentPlayerIndex > 0) {
                this.gameState.currentPlayerIndex--;
            } else {
                // 進入下一輪
                this.gameState.currentRound++;
                // 奇數輪保持第一個玩家開始
            }
        }

        // 檢查遊戲是否結束
        if (this.gameState.currentRound > this.gameState.totalRounds) {
            this.gameState.gameStatus = 'finished';
        } else {
            this.updateCurrentPlayer();
        }
    }

    // 獲取當前玩家
    getCurrentPlayer() {
        return this.gameState.players[this.gameState.currentPlayerIndex];
    }

    // 獲取選秀順序
    getDraftOrder() {
        const order = [];
        const totalPlayers = this.gameState.players.length;
        
        for (let round = 1; round <= this.gameState.totalRounds; round++) {
            if (round % 2 === 1) {
                // 奇數輪：1→N
                for (let i = 0; i < totalPlayers; i++) {
                    order.push({
                        round: round,
                        playerIndex: i,
                        playerName: this.gameState.players[i].name,
                        isCurrent: round === this.gameState.currentRound && 
                                 i === this.gameState.currentPlayerIndex &&
                                 this.gameState.gameStatus === 'playing'
                    });
                }
            } else {
                // 偶數輪：N→1
                for (let i = totalPlayers - 1; i >= 0; i--) {
                    order.push({
                        round: round,
                        playerIndex: i,
                        playerName: this.gameState.players[i].name,
                        isCurrent: round === this.gameState.currentRound && 
                                 i === this.gameState.currentPlayerIndex &&
                                 this.gameState.gameStatus === 'playing'
                    });
                }
            }
        }
        
        return order;
    }

    // 獲取進度百分比
    getProgress() {
        const totalPicks = this.gameState.players.length * this.gameState.totalRounds;
        const completedPicks = this.gameState.draftHistory.length;
        return Math.round((completedPicks / totalPicks) * 100);
    }

    // 搜尋新秀
    searchPlayers(query) {
        if (!query.trim()) {
            return this.draftPool;
        }
        
        return this.draftPool.filter(player => 
            player.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    // 獲取已選擇的新秀
    getSelectedPlayers() {
        return this.draftPool.filter(player => player.isSelected)
                           .sort((a, b) => {
                               // 按選擇順序排序
                               const aIndex = this.gameState.draftHistory.findIndex(h => h.selectedPlayer === a.name);
                               const bIndex = this.gameState.draftHistory.findIndex(h => h.selectedPlayer === b.name);
                               return aIndex - bIndex;
                           });
    }

    // 重置遊戲
    resetGame() {
        this.gameState = {
            gameStatus: 'setup',
            currentRound: 1,
            currentPlayerIndex: 0,
            totalRounds: 5,
            players: [],
            draftPool: [],
            draftHistory: []
        };
        this.saveGameState();
    }

    // 儲存遊戲狀態
    saveGameState() {
        try {
            localStorage.setItem('draftGameState', JSON.stringify(this.gameState));
        } catch (error) {
            console.error('無法儲存遊戲狀態:', error);
        }
    }

    // 載入遊戲狀態
    loadGameState() {
        try {
            const saved = localStorage.getItem('draftGameState');
            if (saved) {
                const state = JSON.parse(saved);
                // 確保載入的狀態有效
                if (state.gameStatus && state.players && state.draftPool) {
                    this.gameState = state;
                }
            }
        } catch (error) {
            console.error('無法載入遊戲狀態:', error);
        }
    }

    // 獲取遊戲狀態
    get gameStatus() {
        return this.gameState.gameStatus;
    }

    get currentRound() {
        return this.gameState.currentRound;
    }

    get players() {
        return this.gameState.players;
    }

    get draftPool() {
        return this.gameState.draftPool;
    }

    get draftHistory() {
        return this.gameState.draftHistory;
    }
}