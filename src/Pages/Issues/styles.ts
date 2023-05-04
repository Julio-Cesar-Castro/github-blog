import styled from 'styled-components'

export const IssuesContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: -5.6rem;
`

export const IssuesModule = styled.div`
  width: 54rem;
  height: 10.5rem;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  padding: 2rem;

  h2 {
    margin-top: 1.25rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const ButtonsContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-decoration: none;
`

export const BackButton = styled.button`
  width: 4.1875rem;
  height: 1.1875rem;

  background: transparent;
  color: ${(props) => props.theme.blue};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  outline: none;
  border: none;
  cursor: pointer;

  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: bold;
`

export const ViewGitButton = styled.button`
  width: 7.1875rem;
  height: 1.1875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  outline: none;
  border: none;
  background: transparent;

  color: ${(props) => props.theme.blue};
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`
export const IssuesInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    span {
      color: ${(props) => props.theme['base-span']};
    }
  }
`
