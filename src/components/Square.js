import React from 'react'
import { useDispatch } from 'react-redux'
import { game } from 'reducers/game'
import { Player } from 'components/Player'

export const Square = ({ value, index }) => {
  /*dispatch is kind of a magical concept that allows us to trigger things within our redux store. 
  Within our redux store we can now dispatch actions. So we need now an action to dispatch=> this is all within the game reducer.*/
  const dispatch = useDispatch()
  const handleClick = () => {
    /*Here we invike dispatch and pass it into the action that we want to run. We are passing it into this componente.
    This is just the index of the current square. This just tells Redux "I have clicked in the square 4"*/ 
    dispatch(game.actions.captureSquare({ index }))
    // TODO send the captureSquare action
  }

  return (
    <button
      className={value === null ? 'square clickable' : 'square'}
      type="button"
      onClick={handleClick}>
      <Player value={value} />
    </button>
  )
}
