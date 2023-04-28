import styled from 'styled-components'

export const FormContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 4.5rem;
`
export const FormInfo = styled.div`
  width: 54rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1{
    font-size: 1.125rem;
    color: ${props => props.theme['base-subtitle']};
  }

  span{
    font-size: 0.875rem;
    color: ${props => props.theme['base-span']};
  }
`

export const FormBox = styled.form`
  width: 54rem;
  margin-top: 0.75rem;

  input {
    width: 54rem;

    border: none;
    border-radius: 6px;
    outline: none;
    padding: 12px 16px;

    background: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-text']};
  }
`
