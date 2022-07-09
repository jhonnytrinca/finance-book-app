import styled from 'styled-components'
import { Form as FormikForm } from 'formik';

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
  width: 692px;
  height: 623px;
  background-color: #fff;
  border-radius: 6px;
  position: relative;
  padding: 52px;
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
  font-size: 28px;
  font-weight: 600;
  color: #4E5555;
  padding: 16px 0;
`

export const Input = styled.input<{error?: boolean}>`
  padding: 20px;
  font-size: 20px;
  border-radius: 7px;
  border: 1px solid ${({error}) => !!error ? '#e23161' : '#D9D9D9'};
  background-color: #F7F7F7;
  color: ${({error}) => !!error ? '#e23161' : '#555555'} ;

  &::placeholder {
    color: ${({error}) => !!error ? '#e23161' : '#555555'} ;
  }

  &:focus {
    outline: none;
  }

`

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ApplyButton = styled.button`
  border: none;
  background-color: #401A9B;
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 20px;
  border-radius: 7px;
  cursor: pointer;
  margin-top: 16px;
`

export const RadioWrapper = styled.div`
  display: flex;
  gap: 10px;
`