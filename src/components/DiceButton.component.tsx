import styled from 'styled-components';
import Dice from '../assets/icon-dice.svg';

const Button = styled.button`
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

interface IButtonDiceProps {
  onClick: () => void;
}

export function ButtonDice({ onClick }: IButtonDiceProps) {
  return (
    <Button onClick={onClick}>
      <img src={Dice} alt="Botão para geração aleatória de conselhos" />
    </Button>
  );
}
