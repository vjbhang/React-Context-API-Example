import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) =>
    props.theme === "light"
      ? "yellow"
      : props.theme === "dark"
      ? "grey"
      : "white"};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 80%;
`;

export const Button = styled.button``;
