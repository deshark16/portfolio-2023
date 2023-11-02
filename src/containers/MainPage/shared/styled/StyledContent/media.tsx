import styled from "styled-components";

export const MainPageContentMedia = styled.div `
  position: relative;
  width: calc((1vw + 1vh) * 26);
  height: calc((1vw + 1vh) * 36);

  &[data-media="left"] {
    right: calc(13 * (1vw + 1vh) + 30px);
  }

  &[data-media="right"] {
    left: calc(13 * (1vw + 1vh) + 30px);
  }
`