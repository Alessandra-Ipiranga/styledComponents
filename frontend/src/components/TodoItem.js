import PropTypes from 'prop-types'
import styled from "styled-components";

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
    onAdvance: PropTypes.func,
    onDelete: PropTypes.func,
}

export default function TodoItem({todo, onAdvance, onDelete}) {
    return (
            <ButtonGroupStyle>
                <h3>{todo.description}</h3>
                <SectionStyled>
                    {onAdvance && <ButtonStyled adv onClick={() => onAdvance(todo)}>Advance</ButtonStyled>}
                    {onDelete && <ButtonStyled del onClick={() => onDelete(todo.id)}>Delete</ButtonStyled>}
                </SectionStyled>
            </ButtonGroupStyle>
    )
}


const ButtonStyled = styled.button`
    ${props => props.adv ? 'background-color: aqua' : ''}
    ${props => props.del ? 'background-color: hotpink' : ''}
`;

const ButtonGroupStyle = styled.section`
    border: 1px solid #333;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 1px 2px 8px #666;
  
`;
const SectionStyled = styled.section`
    display: flex;
    justify-content: flex-end;
`;




