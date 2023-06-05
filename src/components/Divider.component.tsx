import styled from 'styled-components';

import DividerDesktop from '../assets/pattern-divider-desktop.svg';
import DividerMobile from '../assets/pattern-divider-mobile.svg';

const Divider = styled.div`
  background: url(${DividerDesktop}) no-repeat center;
  width: 100%;
  height: 1rem;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    background: url(${DividerMobile}) no-repeat center;
  }
`;

export { Divider };
