import styled from "styled-components";

export const Container = styled.header`
  display: flex;

  h1 {
    color: var(--rose);
    font-family: "Rouge Script";
    font-size: 6rem;
    font-weight: 600;
    margin-bottom: 15px;
  }

  img {
    object-fit: cover;
    min-width: 60%;
    max-height: calc(100vh - 4rem);
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 5%;
  }
`;
