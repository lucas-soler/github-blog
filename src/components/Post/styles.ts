import styled from "styled-components";

export const PostContainer = styled.article`
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

  span {
  }
`;
