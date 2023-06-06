import styled from 'styled-components';
import { useAdvice } from '../hooks/useAdvice';

import IconDice from '../assets/icon-dice.svg';
import DividerDesktop from '../assets/pattern-divider-desktop.svg';
import DividerMobile from '../assets/pattern-divider-mobile.svg';

const AdviceCard = styled.section`
  background-color: var(--dark-grayish);
  width: 30rem;
  border-radius: 1.125rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    width: 16rem;
  }
`;

const TitleID = styled.h2`
  color: var(--neon-green);
  font-size: 0.85rem;
  letter-spacing: 0.35rem;
  padding-bottom: px;
  padding-bottom: 1.5rem;
`;

const TextAdvice = styled.p`
  text-align: center;
  padding-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const Divider = styled.div`
  background: url(${DividerDesktop}) no-repeat center;
  width: 100%;
  height: 1rem;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    background: url(${DividerMobile}) no-repeat center;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: -2rem;
  padding: 20px;
  border-radius: 50%;
  background-color: var(--neon-green);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 20px var(--neon-green);
  }
`;

export const AdviceComponent = () => {
  const { advice, getAdvice } = useAdvice();

  return (
    <AdviceCard>
      <TitleID>
        {advice?.id ? `ADVICE #${advice?.id}` : `LOADING ADVICE...`}
      </TitleID>
      <TextAdvice>{advice?.advice}</TextAdvice>
      <Divider />
      <Button onClick={getAdvice}>
        <img src={IconDice} alt="Button to get new advice" />
      </Button>
    </AdviceCard>
  );
};
