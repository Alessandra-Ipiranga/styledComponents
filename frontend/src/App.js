
import { useEffect, useState } from 'react'
import {
  deleteTodo,
  getAllTodos,
  postTodo,
  putTodo,
} from './service/todo-api-service'
import { nextStatus } from './service/todo-service'
import Details from "./pages/Details";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from "./pages/Homepage";

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getAllTodos()
      .then(todos => setTodos(todos))
      .catch(error => console.error(error))
  }, [])

  const createNewTodo = description =>
    postTodo(description)
      .then(() => getAllTodos())
      .then(todos => setTodos(todos))
      .catch(error => console.error(error))

  const advanceTodo = todo => {
    const newTodo = { ...todo, status: nextStatus(todo.status) }
    putTodo(newTodo)
      .then(() => getAllTodos())
      .then(todos => setTodos(todos))
      .catch(error => console.error(error))
  }

  const removeTodo = id =>
    deleteTodo(id)
      .then(() => getAllTodos())
      .then(todos => setTodos(todos))
      .catch(error => console.error(error))

  return (
      <Router>

        <Switch>
          <Route path="/Details">
            <Details/>
          </Route>
          <Route path="/">
            <Homepage todos = {todos} createNewTodo={createNewTodo} advanceTodo={advanceTodo} removeTodo={removeTodo}/>
          </Route>
        </Switch>

      </Router>
  )
}
