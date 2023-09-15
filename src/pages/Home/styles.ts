import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: -5.5rem;
  max-width: 54rem;
  padding-bottom: 15rem;

  > section {
    justify-content: center;
    align-items: center;
  }

  > section:nth-child(2) {
    margin-top: 4.5rem;
  }

  > section:last-child {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;
