import Board from './Board'
import PropTypes from 'prop-types'
import styled from "styled-components";

BoardsOverview.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAdvance: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default function BoardsOverview({ todos, onAdvance, onDelete }) {
  const openTodos = todos.filter(todo => todo.status === 'OPEN')
  const inProgressTodos = todos.filter(todo => todo.status === 'IN_PROGRESS')
  const doneTodos = todos.filter(todo => todo.status === 'DONE')

  return (
    <BoardOverviewStyled>
      <Board title="Todo" todos={openTodos} onAdvance={onAdvance} />
      <Board title="Doing" todos={inProgressTodos} onAdvance={onAdvance} />
      <Board title="Done" todos={doneTodos} onDelete={onDelete} />
    </BoardOverviewStyled>
  )
}

const BoardOverviewStyled = styled.main `
overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 12px;
    padding: 0 12px;
`;