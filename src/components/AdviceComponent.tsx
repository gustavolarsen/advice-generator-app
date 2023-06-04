import styled from 'styled-components';

const AdviceCard = styled.section`
  background-color: var(--dark-grayish);
  width: 33.75rem;
  height: 22rem;
  border-radius: 1.125rem;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleID = styled.h1`
  color: var(--neon-green);
  font-size: 0.85rem;
  letter-spacing: 0.35rem;

  padding: 1.5rem;
`;

export function AdviceG() {
  const id = 117;
  return (
    <AdviceCard>
      <TitleID>ADVICE #{id}</TitleID>
    </AdviceCard>
  );
}
