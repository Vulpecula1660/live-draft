// 主應用程式
let game;
let ui;

// 初始化應用程式
document.addEventListener('DOMContentLoaded', () => {
    game = new DraftGame();
    ui = new DraftUI(game);
    
    // 根據遊戲狀態初始化UI
    ui.initializeFromGameState();
});

// 讓選擇函數可以在全域範圍內使用
window.ui = null;

// 確保UI已初始化後再設定全域參考
document.addEventListener('DOMContentLoaded', () => {
    window.ui = ui;
});