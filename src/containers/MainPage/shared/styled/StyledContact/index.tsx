import { media } from "shared/util/media";
import styled from "styled-components";

export const MainPageContact = styled.div`
  position: fixed;
  bottom: 2rem;
  display: flex;
  align-items: center;
  right: 2rem;
  gap: 1rem;
  padding: 0 10px 0 0;

  ${media.tablet} {
    right: 1rem;
  }
`;
