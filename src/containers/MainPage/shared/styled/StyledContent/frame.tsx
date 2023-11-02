import { sharedValues } from "shared/util/sharedValues";
import styled from "styled-components";

export const MainPageContentThreeDFrame = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 
    0.75s ${sharedValues.scrollEase}, 
    opacity 0.75s ease;
    
  will-change: transform;
  transform-style: preserve-3d;
`;