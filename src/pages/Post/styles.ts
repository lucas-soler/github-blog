import styled from "styled-components";

export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: -5.5rem;
  width: 100%;
  max-width: 54rem;
`;

export const PostHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background-color: ${(props) => props.theme["blue-600"]};
  border-radius: 10px;
  padding: 2rem;

  > :nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 0.75rem;
    gap: 1rem;
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

export const PostFooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  color: ${(props) => props.theme["blue-100"]};

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  img {
    width: 1.125rem;
    height: 1.125rem;
    opacity: 0.8;
    border-radius: 8px;
  }
`;
