import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote, asObject } from './reducers/anecdoteReducer'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes()) 
  }, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteList />
      <Filter />
      <AnecdoteForm />
    </div>
  )
}

export default App