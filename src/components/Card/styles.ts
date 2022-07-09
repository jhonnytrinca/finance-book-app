import styled from 'styled-components'

export const Card = styled.div<{variant: boolean | undefined}>`
  width: 100%;
  height: 10.9rem;
  border-radius: 0.625rem;
  padding: 1.875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({variant}) => variant ? '#06D6A2' : '#FFF'};
  color: ${({variant}) => variant ? '#FFF' : '#484F55'};

  &:hover {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
  
  @media(max-width: 800px) {
    height: 100%;
    padding: 0.6rem;
    flex-direction: row;
    gap: 0.8rem;
  }
`
export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  span {
    font-size: 1.5rem;
  }

  @media(max-width: 800px) {
    width: 30%;
    align-items: center;
    gap: 0.2rem;

    span {
      font-size: 1.125rem;
    }
  }
`

export const Value = styled.p`
  font-size: 2.625rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  @media(max-width: 800px) {
    font-size: 1.7rem;
  }
`