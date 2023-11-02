import styled from "styled-components";
import { loading } from "./keyframes";

const soundUrl = new URL("../../assets/logo/sound.jpg", import.meta.url);

type MainPageSoundProps = {
  $active: boolean;
  $loading: boolean;
}

export const MainPageSound = styled.div<MainPageSoundProps>`
  position: fixed;
  bottom: 7vh;
  width: 30px;
  left: 7vw;
  cursor: ${({$loading}) => $loading ? "default" : "pointer"};
  height: 30px;
  transition: all 0.5s ease;
  background: ${({$loading}) => $loading ? `none` : `url(${soundUrl.href}) center no-repeat`};
  background-size: cover;
  
  & div {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    font-size: 10px;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    opacity: ${({$loading}) => $loading ? "1" : "0"};
    border-top: solid 2px #000;
    animation: ${loading} 1s linear infinite;
    transition: opacity .5s ease;
  }

  &::before {
    position: absolute;
    right: 0;
    top: 0;
    content: '';
    background: var(--frame-bg-color);
    width: 15px;
    transition: transform .5s ease;
    transform-origin: right;
    height: 30px;
    transform: scale(
      ${({$active}) => $active ? "0" : "1"}
    );
  }
`;
