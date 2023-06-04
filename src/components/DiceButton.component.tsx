import styled from 'styled-components';
import Dice from '../assets/icon-dice.svg';

const Button = styled.button`
  padding: 20px;
  border-radius: 50%;
  background-color: var(--neon-green);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export function ButtonDice() {
  return (
    <Button>
      <img src={Dice} alt="" />
    </Button>
  );
}
