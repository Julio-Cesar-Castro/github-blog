import {
  ArticleBox,
  ArticleContainer,
  BackButton,
  ButtonsContainer,
  CommentContainer,
  CommentLet,
  IssuesContainer,
  IssuesInfo,
  IssuesModule,
  PComment,
  PValue,
  ParagraphBox,
  SpanLet,
  SpanValue,
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
      <ArticleContainer>
        <ArticleBox>
          <div>
            <ParagraphBox>
              <p>
                <strong>
                  Programming languages all have built-in data structures, but
                  these often differ from one language to another.
                </strong>{' '}
                This article attempts to list the built-in data structures
                available in JavaScript and what properties they have. These can
                be used to build other data structures. Wherever possible,
                comparisons with other languages are drawn.
              </p>
              <div>
                <span>Dynamic typing </span>
                <p>
                  {' '}
                  JavaScript is a loosely typed and dynamic language. Variables
                  in JavaScript are not directly associated with any particular
                  value type, and any variable can be assigned (and re-assigned)
                  values of all types:
                </p>
              </div>
            </ParagraphBox>

            <CommentContainer>
              <div>
                <SpanLet>let</SpanLet>
                <PValue>foo =</PValue>
                <PValue>
                  <SpanValue>42</SpanValue> ;
                </PValue>
                <CommentLet>/ / foo is now a number</CommentLet>
              </div>

              <div>
                <PValue>foo =</PValue>
                <PValue>
                  <SpanValue>&rsquo;bar&rsquo;</SpanValue> ;
                </PValue>
                <PComment>/ / foo is now a string</PComment>
              </div>

              <div>
                <PValue>foo =</PValue>
                <PValue>
                  <SpanValue>true</SpanValue> ;
                </PValue>
                <PComment>/ / foo is now a boolean</PComment>
              </div>
            </CommentContainer>
          </div>
        </ArticleBox>
      </ArticleContainer>
    </>
  )
}
