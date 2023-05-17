import styled from 'styled-components'

export const ProfileContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: -5.6rem;
`

export const ProfileModule = styled.div`
  width: 54rem;
  height: 13.25rem;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 2rem 2rem 2rem 2.5rem;
`
export const Picture = styled.figure`
  width: 9.25rem;
  height: 9.25rem;
  margin-left: 0.375rem;

  border-radius: 8px;
  background: ${(props) => props.theme['base-input']};

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
`
export const ProfileInfo = styled.div`
  width: 38.25rem;
  height: 8.813rem;
`

export const UnderButton = styled.div`
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.blue};
  }
`

export const TitleBox = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 100%;
  }

  button {
    background: transparent;
    color: ${(props) => props.theme.blue};
    line-height: 100%;
    text-transform: uppercase;
    cursor: pointer;

    font-size: 0.75rem;
    font-weight: 900;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`

export const Descripiton = styled.p`
  flex: 1;
  height: 3.25rem;
  margin-top: 1rem;

  color: ${(props) => props.theme['base-text']};
`

export const ProfileSubInfo = styled.div`
  width: 24.563rem;
  height: 1.625rem;
  margin-top: 1.5rem;

  display: flex;
`

export const SubInfoBox = styled.div`
  width: 6.938rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`

export const Icon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`

export const Paragraph = styled.p`
  font-size: 0.75rem;
  line-height: 100%;
`
