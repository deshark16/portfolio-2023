import styled from "styled-components";
import { zINDEX } from "shared/util/sharedValues";
import { media } from "shared/util/media";

export const MainPageHeaderWrapper = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${zINDEX.header};
  padding: 0 2rem;

  ${media.tablet} {
    padding: 0 1rem;
  }
`