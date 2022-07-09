import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 11.25rem);
  background-color: #F1F5F8;

  @media(max-width: 800px) {
    min-height: calc(100vh - 5rem);
  }
`

export const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;

  @media(max-width: 800px) {
    width: 96%;
  }
`

export const ResumeWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
  position: relative;
  top: -30px;

  @media(max-width: 800px) {
    flex-direction: column;
    top: 0;
    padding: 1rem 0;
  }
`