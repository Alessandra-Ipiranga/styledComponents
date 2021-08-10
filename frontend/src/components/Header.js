import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <HeaderH1Styled>Super Kanban</HeaderH1Styled>
    </header>
  )
}

const HeaderH1Styled = styled.h1 `
    margin: 0;
    padding: 12px;
`;
