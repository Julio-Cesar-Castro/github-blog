import styled from 'styled-components'

export const PostModule = styled.button`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;

  border-radius: 0.625rem;
  background: ${(props) => props.theme['base-post']};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border: none;
  cursor: pointer;

  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`
export const PostInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const PostTitle = styled.h2`
  width: 17.6875rem;
  font-size: 1.25rem;
  text-align: left;
  color: ${(props) => props.theme['base-title']};
`

export const Date = styled.span`
  color: ${(props) => props.theme['base-span']};
`

export const PostDescription = styled.p`
  margin-top: 1.25rem;
  width: 22rem;
  height: fit-content;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;

  color: ${(props) => props.theme['base-text']};
  text-overflow: ellipsis;
  text-align: start;
`
