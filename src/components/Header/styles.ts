import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 11.25rem;
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

  @media(max-width: 800px) {
    height: 5rem;

    .wrapper {
      width: 90%;
      height: 100%;
      gap: 2rem;
    }
  }
`

export const Button = styled.button`
  width: 15.32rem;
  height: 3.32rem;
  text-transform: uppercase;
  background-color: #401A9B;
  color: #B9B9B9;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #401A9B90;
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
  }

  @media(max-width: 800px) {
    width: 11.25rem;
    height: 2.5rem;
  }
`