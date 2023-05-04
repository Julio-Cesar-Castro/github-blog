import styled from 'styled-components'
import BackgroundSVG from '../../../../assets/Background.svg'

export const Background = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 18.5rem;
  margin: 0 auto;

  background-image: url(${BackgroundSVG});
  background-position: center center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`
