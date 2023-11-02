import { media } from "shared/util/media";
import styled from "styled-components";

export const MainPageNavbarList = styled.ul `
  display: flex;
  ${media.tablet} {
    flex-direction: column;
    align-items: center;
  }
`