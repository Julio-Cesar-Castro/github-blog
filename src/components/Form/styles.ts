import styled from 'styled-components'

export const FormContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border: solid 1px red;
  margin-top: 4.5rem;
`
export const FormInfo = styled.div`
  width: 54rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FormBox = styled.form`
  width: 54rem;

  input {
    width: 54rem;
  }
`
