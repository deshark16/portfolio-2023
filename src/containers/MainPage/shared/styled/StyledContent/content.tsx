import styled from "styled-components";

export const MainPageContentText = styled.div `
  & [data-tag="h2"] {
    text-align: center;
    font-size: calc((1vw + 1vh) * 3.3);
  }

  & [data-tag="h3"] {
    font-size: calc((1vw + 1vh) * 3);
  }

  &[data-text="left"] > * {
    position: relative;
    left: 18vw;
  }

  &[data-text="right"] > * {
    position: relative;
    right: 18vw;
  }
`