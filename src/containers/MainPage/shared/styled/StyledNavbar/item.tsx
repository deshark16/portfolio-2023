import { media } from "shared/util/media";
import styled from "styled-components";

export const MainPageNavbarItem = styled.li `
  &:not(:last-child) {
    margin: 0px 2rem 0px 0px;
  }

  ${media.tablet} {
    margin: 0px 2rem 0px 0px;
  }
`