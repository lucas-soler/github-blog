import styled from "styled-components";

export const PostContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background-color: ${(props) => props.theme["blue-600"]};
  border-radius: 10px;
  padding: 2rem;
  height: 12rem;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${(props) => props.theme["blue-400"]};
  }

  a:hover {
    text-decoration: none;
  }

  header {
    display: flex;
    flex-direction: row;

    :first-child {
      flex: 1;
    }

    h1 {
      color: white;
    }
  }

  .post-body {
    min-height: 0;
    line-height: 180%;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    p {
      text-overflow: ellipsis;
    }
  }
`;
