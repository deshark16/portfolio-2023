import styled from "styled-components";
import { zINDEX } from "shared/util/sharedValues";

export const MainPageHeaderWrapper = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${zINDEX.header};
`