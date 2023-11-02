import styled from "styled-components";
import { titleKeyframes } from "./keyframes";

export const MainPagePortfolioFixedLink = styled.a`
  position: absolute;
  text-decoration: underline;
  color: #fff;
  opacity: 0;
  transition: all 0.8s ease;
  visibility: hidden;
  text-transform: uppercase;
  &[data-title="fade"] {
    opacity: 1;
    visibility: visible;
    animation: ${titleKeyframes} 2s linear infinite;
    &:hover {
      animation-play-state: paused;
    }
    &:active,
    &:focus {
      outline: none;
    }
  }
`;
