import { FormContainer, FormInfo, FormBox } from './styles'

export function Form() {
  return (
    <FormContainer>
      <FormInfo>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </FormInfo>

      <FormBox action="">
        <input type="text" />
      </FormBox>
    </FormContainer>
  )
}
