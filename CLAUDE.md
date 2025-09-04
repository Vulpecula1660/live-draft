# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a draft/selection web system (選秀網頁系統) - a front-end only web application that allows multiple players to participate in a snake draft format. Players select from a pool of candidates, with each player getting 5 picks total.

## Core Architecture

Based on the product specification (`選秀網頁系統產品規格書.md`), this system should be implemented as:

- **Pure Frontend**: No backend required, uses LocalStorage for game state persistence
- **Single Page Application**: Three main views - Setup, Draft, Results
- **Snake Draft Logic**: Alternating pick order (1→N, then N→1, then 1→N, etc.)
- **State Management**: Game state, player data, draft pool, and draft history

## Key Data Structures

The system revolves around these core data structures:

```javascript
// Draft Pool Item
{
  id: "unique_id",
  name: "候選人姓名", 
  image: "圖片URL",
  instagram: "IG連結",
  isSelected: false,
  selectedBy: null,
  selectedRound: null
}

// Player
{
  id: "player_id",
  name: "玩家姓名",
  selectedPlayers: [候選人ID陣列],
  currentTurn: false
}

// Game State
{
  gameStatus: "setup/playing/finished",
  currentRound: 1,
  currentPlayerIndex: 0,
  totalRounds: 5,
  players: [玩家陣列],
  draftPool: [候選人陣列], 
  draftHistory: [選秀歷程]
}
```

## Implementation Requirements

- **Framework**: React.js or Vue.js recommended
- **Styling**: CSS3 + Bootstrap or Tailwind CSS
- **Responsive Design**: Support desktop, tablet, and mobile
- **Browser Support**: Chrome, Firefox, Safari, Edge (latest versions)
- **Performance**: Page load < 3s, selection response < 1s

## Core Features to Implement

1. **Game Setup**: Configure 2-12 players with custom names
2. **Draft Pool**: Display candidates with name, photo, and Instagram link
3. **Snake Draft**: Implement alternating turn order across 5 rounds
4. **Turn Management**: One player selects at a time with confirmation
5. **Results Display**: Show each player's final team of 5 selections

## Development Phases

**Phase 1 (MVP)**:
- Basic draft functionality
- Snake order implementation  
- Simple UI design

**Phase 2**:
- Detailed candidate information
- Advanced UI design
- Draft statistics

**Phase 3**:
- Data persistence improvements
- Error handling
- UI optimizations

## File Organization

When implementing, consider this structure:
- `/src/components/` - React/Vue components
- `/src/utils/` - Draft logic and game utilities
- `/src/data/` - Sample draft pool data
- `/src/styles/` - CSS/styling files
- `/public/` - Static assets and candidate images