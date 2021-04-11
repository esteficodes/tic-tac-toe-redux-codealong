import React from 'react'
import { Square } from 'components/Square'
import { useSelector } from 'react-redux'

export const Board = () => {
  const squares = useSelector((store) => (store.game.squares))
  // TODO - use the 'squares' state from the game reducer
  

  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </div>
  )
}
