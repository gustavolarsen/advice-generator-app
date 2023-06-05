import styled from 'styled-components';
import { useAdvice } from '../hooks/useAdvice';
import { useEffect } from 'react';
import { ButtonDice } from './DiceButton.component';
import { Divider } from './Divider.component';

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

const TitleID = styled.h1`
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

const PositionButton = styled.div`
  position: absolute;
  bottom: -2rem;
`;

export function Advice() {
  const { adviceObject, getAdvice } = useAdvice();

  useEffect(() => {
    getAdvice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const id = adviceObject?.slip.id;
  const advice = adviceObject?.slip.advice;

  function handleClick(): void {
    getAdvice();
  }

  return (
    <AdviceCard>
      <TitleID role="Título e ID do conselho">{`ADVICE #${id}`}</TitleID>
      <TextAdvice role="Texto do conselho">{`"${advice}"`}</TextAdvice>
      <Divider role="" />
      <PositionButton>
        <ButtonDice onClick={handleClick} />
      </PositionButton>
    </AdviceCard>
  );
}
