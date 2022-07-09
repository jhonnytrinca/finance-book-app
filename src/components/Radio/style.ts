import styled from 'styled-components';

export const Label = styled.label<{checked: boolean, name: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  height: 68px;
  border: ${({checked}) => !checked ? '1px solid #D9D9D9' : null };
  border-radius: 7px;
  color: #4E5555;
  font-size: 20px;
  background-color: ${({checked, name}) => checked ? name === 'entry' ? '#06d59f20' : '#e2316140' : '#FFF'}
`

export const Input = styled.input`
  display: none;
`