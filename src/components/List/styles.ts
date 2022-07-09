import styled from 'styled-components'

export const Table = styled.div`
  width: 100%;
  display: grid;
  border-collapse: collapse;
`

export const THead = styled.div`
  width: 100%;
  color: #B9B9B9;
  font-size: 18px;
  display: grid;
  grid-template-columns: 3fr repeat(3, 2fr) 50px;
  padding: 20px 16px;
`


export const Tbody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const TR = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(3, 2fr) 50px;
  background-color: #FFF;
  border-radius: 8px;
  color: #4C5A5A;
  padding: 16px;

  &:hover {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  .entry {
    font-weight: 600;
    color: #06D7A5;
  }

  .exit {
    font-weight: 600;
      color: #DB3766;
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`