import './TodoItem.css'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Details from "../pages/Details";

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  onAdvance: PropTypes.func,
  onDelete: PropTypes.func,
}

export default function TodoItem({ todo, onAdvance, onDelete }) {
  return (


    <section className="todo-item">
      <h3>{todo.description}</h3>
      <section className="todo-item__button-group">
        {onAdvance && <button onClick={() => onAdvance(todo)}>Advance</button>}
        {onDelete && <button onClick={() => onDelete(todo.id)}>Delete</button>}
          <Link to="/Details">About</Link>
      </section>
    </section>




  )
}
