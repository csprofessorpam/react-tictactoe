import React from 'react'
import Board from '../../components/Board/Board';


function Game() {
  return (
    <div className="game">
        <div className="game-board">
            <Board />
        </div>
        <div className="game-info"></div>
        <div></div>
        <ol></ol>

    </div>
  )
}

export default Game