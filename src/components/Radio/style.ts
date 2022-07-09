import styled from 'styled-components';

export const Label = styled.label<{checked: boolean, name: string, error: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  position: relative;
  padding: 0.625rem;
  cursor: pointer;
  width: 100%;
  height: 4.25rem;
  border: 1px solid ${({checked, error}) => error ? '#e23161': !checked ? '#D9D9D9' : 'transparent'};
  border-radius: 0.5rem;
  color: #4E5555;
  font-size: 1.25rem;
  background-color: ${({checked, name}) => checked ? name === 'entry' ? '#06d59f20' : '#e2316140' : '#FFF'};

  
  @media(max-width: 800px) {
    height: 3rem;
    font-size: 1rem;
  }
`

export const Input = styled.input`
  display: none;
`