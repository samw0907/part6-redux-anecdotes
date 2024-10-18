import { useDispatch} from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
      // input-field value is in variable event.target.value
      dispatch(setFilter(event.target.value))
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        <div>
            <input
          type="text"
          placeholder="Filter anecdotes"
          onChange={handleChange}
             />
        </div>
      </div>
    )
  }
  
  export default Filter