import {
  BackButton,
  ButtonsContainer,
  IssuesContainer,
  IssuesInfo,
  IssuesModule,
  ViewGitButton,
} from './styles'

import { NavLink } from 'react-router-dom'

import ArrowIcon from '../../assets/Arrow.svg'
import CommentIcon from '../../assets/Comment.svg'
import CalendarIcon from '../../assets/Calendar.svg'
import GitIcon from '../../assets/Github.svg'

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Issues() {
  return (
    <>
      <IssuesContainer>
        <IssuesModule>
          <ButtonsContainer>
            <NavLink to="/">
              {' '}
              <BackButton>
                <img src={ArrowIcon} alt="" />
                Voltar
              </BackButton>
            </NavLink>

            <ViewGitButton>
              <span>Ver no github</span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                color="#3294F8"
                size="1x"
              />
            </ViewGitButton>
          </ButtonsContainer>
          <h2>JavaScript data types and data structures</h2>

          <IssuesInfo>
            <div>
              <img src={GitIcon} alt="" />
              <span>cameronwll</span>
            </div>
            <div>
              <img src={CalendarIcon} alt="" />
              <span>Há 1 dia</span>
            </div>
            <div>
              <img src={CommentIcon} alt="" />
              <span>5 comentários</span>
            </div>
          </IssuesInfo>
        </IssuesModule>
      </IssuesContainer>
    </>
  )
}
