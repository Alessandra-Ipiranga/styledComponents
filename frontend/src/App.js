import './App.css'
import Header from './components/Header'
import BoardsOverview from './components/BoardsOverview'
import NewTodo from './components/NewTodo'
import {useEffect, useState} from 'react'
import {
    deleteTodo,
    getAllTodos,
    postTodo,
    putTodo,
} from './service/todo-api-service'
import {nextStatus} from './service/todo-service'
import {Link, Route, Switch} from "react-router-dom";
import TodoItem from "./components/TodoItem";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Details from "./components/Details";

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
        const newTodo = {...todo, status: nextStatus(todo.status)}
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
            <div className="page-layout">
                <Header/>
                <BoardsOverview
                    todos={todos}
                    onAdvance={advanceTodo}
                    onDelete={removeTodo}
                />
                <NewTodo onAdd={createNewTodo}/>
            </div>

            <Link to="/">Home</Link>
            <Link to="/details">Home</Link>
            <Switch>
                <Route path="/" component={TodoItem}></Route>
                <Route path="/details" component={Details}></Route>
            </Switch>
        </Router>
    )
}
