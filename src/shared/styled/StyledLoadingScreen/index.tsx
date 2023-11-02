import { zINDEX } from "shared/util/sharedValues";
import styled from "styled-components";

export const StyledLoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${zINDEX.loadingScreen};
  opacity: 1;
  visibility: visible;
  pointer-events: none;
  background: blue;
  transition: 
    background ease .5s,
    visibility ease .5s,
    opacity ease .5s;
  &[data-screen="loaded"] {
    opacity: 0;
    visibility: hidden;
    pointer-events: all;
  }
`