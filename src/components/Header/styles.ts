import styled from "styled-components";
import HeaderBackground from "../../assets/header.png";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 18.5rem;
  background-image: url(${HeaderBackground});
  background-repeat: no-repeat;
  background-position: center center;

  section {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    justify-content: center;
    align-items: center;
    height: fit-content;
    cursor: pointer;

    span {
      text-transform: uppercase;
      color: ${(props) => props.theme.blue};
      font-family: "Coda", cursive;
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`;
