import styled from "styled-components";

export const SBanner = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  padding: 0.5rem;

  .message {
    grid-column: 2/3;
    justify-self: center;
    pointer-events: none;
  }

  .close {
    grid-column: 3/3;
    justify-self: end;
    cursor: pointer;
  }
`;
