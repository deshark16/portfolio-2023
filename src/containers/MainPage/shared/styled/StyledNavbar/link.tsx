import styled from "styled-components";

type MainPageNavbarLinkProps = {
  $navId: number,
  $activeLink: number
}

export const MainPageNavbarLink = styled.a<MainPageNavbarLinkProps>`
  position: relative;
  color: ${(props) => props.$navId === props.$activeLink ? "blue" : "var(--text-color)"};
  background: inherit;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: color .3s ease;
  &:hover {
    color: blue;
  }
  &::before {
    position: absolute;
    content: "";
    bottom: -2px;
    transform-origin: center;
    transform: scale(
      ${(props) => props.$navId === props.$activeLink ? "1" : "0"}
    );
    background: blue;
    width: 100%;
    height: 2px;
    transition: transform .3s ease-in-out;
    transition-delay: .2s;
  }
`