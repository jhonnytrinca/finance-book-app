import styled, {css} from 'styled-components'

export const Card = styled.div<{variant: boolean | undefined}>`
  width: 33%;
  height: 175px;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;

  &:hover {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  ${({variant}) => 
    variant && 
    css`
      background-color: #06D6A2;
      color: #FFF
    `
  }
`
export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  span {
    font-size: 24px;
  }
`

export const Value = styled.p`
  font-size: 42px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
`