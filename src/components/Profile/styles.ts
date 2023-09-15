import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme["blue-700"]};
  padding: 2rem;

  img {
    border-radius: 8px;
  }
`;

export const ProfileSectionContainer = styled.section`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;

  article {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h1 {
    font-size: 1.5rem;
    color: white;
  }

  footer {
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
      opacity: 0.3;
    }
  }
`;
