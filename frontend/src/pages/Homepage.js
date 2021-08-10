import Header from "../components/Header";
import BoardsOverview from "../components/BoardsOverview";
import NewTodo from "../components/NewTodo";
import "./Pages.css"


export default function Homepage({todos, createNewTodo, advanceTodo, removeTodo}) {
  return  <div className="page-layout">
        <Header />
        <BoardsOverview
            todos={todos}
            onAdvance={advanceTodo}
            onDelete={removeTodo}
        />
        <NewTodo onAdd={createNewTodo} />
        </div>
}