import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { game } from './reducers/game'
import { Board } from './components/Board'
import { Stats } from './components/Stats'

const reducer = combineReducers({
  /*the store consists of just one reducer: the game reducer*/ 
  game: game.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    /*setting a provider and passing in a store. Gives acces to redux*/
    <Provider store={store}>
      <main>
        <Board />
        <Stats />
      </main>
    </Provider>
  )
}
