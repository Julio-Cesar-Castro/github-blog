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

export const ArticleContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ArticleBox = styled.div`
  width: 54rem;

  padding: 2.5rem 2rem;

  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
  }
`

export const ParagraphBox = styled.div`
  div {
    margin-top: 2rem;

    span {
      color: ${(props) => props.theme.blue};
      font-size: 1rem;
      text-decoration: underline;
    }

    p {
      margin-top: 0.5rem;
    }
  }
`

export const CommentContainer = styled.div`
  width: 50rem;

  border-radius: 2px;
  padding: 1rem;

  background: ${(props) => props.theme['base-post']};

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    line-height: 160%;
  }
`

export const CommentLet = styled.span`
  margin-left: 2.5rem;
  color: #4f6173;
`

export const SpanLet = styled.span`
  color: #80abd6;
  margin-right: 0.5rem;
`

export const SpanValue = styled.span`
  color: #6ad445;
  margin-left: 0.5rem;
`
export const PValue = styled.p`
  color: #d5dce3;
`

export const PComment = styled.p`
  color: #4f6173;
  margin-left: 3.5rem;
  line-height: 160%;
`
