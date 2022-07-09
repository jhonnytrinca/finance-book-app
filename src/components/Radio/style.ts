import styled from 'styled-components';

export const Label = styled.label<{checked: boolean, name: string, error: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  height: 68px;
  border: 1px solid ${({checked, error}) => error ? '#e23161': !checked ? '#D9D9D9' : 'transparent'};
  border-radius: 7px;
  color: #4E5555;
  font-size: 20px;
  background-color: ${({checked, name}) => checked ? name === 'entry' ? '#06d59f20' : '#e2316140' : '#FFF'}
`

export const Input = styled.input`
  display: none;
`