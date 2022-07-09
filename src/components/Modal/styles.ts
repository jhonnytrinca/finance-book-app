import styled, { css } from 'styled-components'
import { Form as FormikForm } from 'formik';
import NumberFormat from 'react-number-format';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000040;
`

export const Modal = styled.div`
  width: 43.25rem;
  height: 38rem;
  background-color: #fff;
  border-radius: 0.5rem;
  position: relative;
  padding: 3.25rem;

  @media(max-width: 800px) {
    height: 29rem;
    padding: 2rem 1.5rem;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 26px;
  right: 26px;
  cursor: pointer;
`

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #4E5555;
  padding: 1rem 0;

  @media(max-width: 800px) {
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }
`

const mutualInput = css`
  padding: 1.25rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;

  &:focus {
    outline: none;
  }

  @media(max-width: 800px) {
    padding: 0.8rem;
    font-size: 1rem;
  }
`

export const Input = styled.input<{error?: boolean}>`
  ${mutualInput}
  border: 1px solid ${({error}) => !!error ? '#e23161' : '#D9D9D9'};
  background-color: #F7F7F7;
  color: ${({error}) => !!error ? '#e23161' : '#555555'} ;

  &::placeholder {
    color: ${({error}) => !!error ? '#e23161' : '#555555'} ;
  }
`

export const ValueInput = styled(NumberFormat)<{error?: boolean}>`
  ${mutualInput}
  border: 1px solid ${({error}) => !!error ? '#e23161' : '#D9D9D9'};
  background-color: #F7F7F7;
  color: ${({error}) => !!error ? '#e23161' : '#555555'} ;

  &::placeholder {
    color: ${({error}) => !!error ? '#e23161' : '#555555'} ;
  }
`

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const ApplyButton = styled.button`
  border: none;
  background-color: #401A9B;
  color: #fff;
  font-size: 1.375rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 1.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;

  @media(max-width: 800px) {
    padding: 0.8rem;
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`

export const RadioWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
`