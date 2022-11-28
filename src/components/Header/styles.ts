import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  h1 {
    color: var(--rose);
    font-family: "Rouge Script";
    font-size: 6rem;
    font-weight: 600;
    margin-bottom: 15px;
  }

  img {
    max-width: 300px;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
