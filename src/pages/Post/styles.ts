import styled from "styled-components";

export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: -5.5rem;
  max-width: 54rem;
`;

export const PostHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background-color: ${(props) => props.theme["blue-600"]};
  border-radius: 10px;
  padding: 2rem;

  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    :first-child {
      flex: 1;
    }
  }

  h1 {
    color: white;
  }
`;

export const PostBodyContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
`;
