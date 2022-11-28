import styled from "styled-components";

export const Container = styled.nav`
  background: var(--background);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 2rem;
  align-items: center;

  ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
  }

  li {
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    margin-left: 30px;
    font-size: 0.75rem;
    font-family: "Open-sans", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s;
    &:hover {
      color: var(--rose);
    }
  }
`;
