import styled from "styled-components";
import { loadingKeyFrame } from "./keyframe";

export const StyledLoadingScreenLoad = styled.div `
  border: 10px solid transparent;
  border-top: solid 10px white;
  border-bottom: solid 10px white;
  width: 150px;
  height: 150px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  animation: 1.5s ${loadingKeyFrame} linear infinite;
`