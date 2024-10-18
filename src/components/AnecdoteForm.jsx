import { useDispatch, useSelector } from 'react-redux'
import { createAnecdote, appendAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
      event.preventDefault()
      const content = event.target.anecdote.value
      event.target.anecdote.value = ''
      
      const newAnecdote = await anecdoteService.createAnecdote(content)
      dispatch(createAnecdote(content))
      dispatch(showNotification(`"${content}" was created`, 5))
  }

    return (
        <div>
            <h2>create new</h2>
            <form  onSubmit={addAnecdote}>
                <div><input name="anecdote"/></div>
                <button type="submit">create</button>
            </form>
        </div>
      )
}

export default AnecdoteForm