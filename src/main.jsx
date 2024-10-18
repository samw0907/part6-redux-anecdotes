import React from 'react'
import ReactDOM from 'react-dom/client'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import App from './App'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import anecdoteReducer, { setAnecdotes } from './reducers/anecdoteReducer'
import deepFreeze from 'deep-freeze'
import { createAnecdote } from './reducers/anecdoteReducer'
import {showNotification } from './reducers/notificationReducer'
import anecdoteService from './services/anecdotes'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  }
})

anecdoteService.getAll().then(anecdotes =>
  store.dispatch(setAnecdotes(anecdotes))
)

console.log('Initial state:', store.getState())

store.subscribe(() => console.log('Updated state:', store.getState()))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <App />
  </Provider>
)
