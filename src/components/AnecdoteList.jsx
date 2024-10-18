import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import {showNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector((state) => state.filter)
    const dispatch = useDispatch()

    const vote = (anecdote) => {
      dispatch(voteAnecdote(anecdote))
      dispatch(showNotification(`You voted for "${anecdote.content}"`, 5))
    }

    const filteredAnecdotes = filter === ''
    ? anecdotes
    : anecdotes.filter(anecdote =>
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
      ).sort((a, b) => b.votes - a.votes)

  console.log(filteredAnecdotes)

  return (
    <div>
      {filteredAnecdotes.length > 0 ? (
        filteredAnecdotes.map(anecdote => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        ))
      ) : (
        <div>No anecdotes found</div>
      )}
    </div>
  )
}

export default AnecdoteList