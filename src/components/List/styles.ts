import styled from 'styled-components'

export const Table = styled.div`
  width: 100%;
  display: grid;
  border-collapse: collapse;
  table-layout: fixed;

  @media(max-width: 800px) {}

`

export const THead = styled.div`
  width: 100%;
  color: #B9B9B9;
  font-size: 1.125rem;
  display: grid;
  grid-template-columns: 3fr repeat(3, 2fr) 3.125rem;
  padding: 1.25rem 1rem;
  
  @media(max-width: 800px) {
    padding: 1rem 0;
    grid-template-columns: 3fr repeat(3, 2fr) 0.8rem;
    font-size: 0.8rem;
  }
`


export const Tbody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media(max-width: 800px) {}

`

export const TR = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(3, 2fr) 3.125rem;
  background-color: #FFF;
  border-radius: 0.5rem;
  color: #4C5A5A;
  padding: 1rem;

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

  @media(max-width: 800px) {
    grid-template-columns: 3fr repeat(3, 2fr) 0.8rem;
    font-size: 0.8rem;
    padding: 0.5rem;
    align-items: center;
    word-break: break-word;
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media(max-width: 800px) {}

`