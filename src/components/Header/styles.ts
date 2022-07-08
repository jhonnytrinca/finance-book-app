import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 180px;
  display: block;
  background-color: #30107D;
  
  .wrapper {
    width: 70%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
`

export const Button = styled.button`
  width: 245px;
  height: 53px;
  text-transform: uppercase;
  background-color: #401A9B;
  color: #B9B9B9;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #401A9B90;
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
  }
`