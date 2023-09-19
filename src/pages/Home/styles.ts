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
    margin-bottom: 3rem;
  }

  > section:last-child {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  header {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;

    :first-child {
      font-size: 1.2rem;
      font-weight: 700;
    }

    :last-child {
      font-size: 0.875rem;
    }
  }

  section {
    width: 100%;
    display: flex;
    flex: 1;

    > input {
      border: 1px solid ${(props) => props.theme["blue-500"]};
      border-radius: 6px;
      flex: 1;
      padding: 0.75rem 1rem;
      color: ${(props) => props.theme["blue-400"]};
      background-color: ${(props) => props.theme["blue-900"]};

      &:focus {
        border: 1px solid ${(props) => props.theme.blue};
      }
    }
  }
`;
