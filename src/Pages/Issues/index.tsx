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

import { NavLink, useParams } from 'react-router-dom'

import ArrowIcon from '../../assets/Arrow.svg'
import CommentIcon from '../../assets/Comment.svg'
import CalendarIcon from '../../assets/Calendar.svg'
import GitIcon from '../../assets/Github.svg'

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useEffect, useState } from 'react'
import axios from 'axios'

import ReactMarkDown from 'react-markdown'

import { formatDistanceToNow } from 'date-fns'

import ptBR from 'date-fns/locale/pt-BR'

interface RepoProps {
  number: number
  repository_url: string
  title: string
  user: { login: string }
  created_at: string
  body: string
  comments: number
}

type ParamsIdProps = {
  id: string
}

export function Issues() {
  const [repo, setRepo] = useState<RepoProps>()

  const { id } = useParams<ParamsIdProps>()

  useEffect(() => {
    axios
      .get('https://api.github.com/search/issues', {
        params: {
          q: 'repo:JulioCastro240902/github-blog/issues',
        },
      })
      .then(({ data: { items } }) => {
        setRepo(items.find((item: RepoProps) => item.number === +(id ?? 1)))
      })
  }, [])

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
              <a href={repo?.repository_url}>Ver no github</a>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                color="#3294F8"
                size="1x"
              />
            </ViewGitButton>
          </ButtonsContainer>
          <h2>{repo?.title}</h2>

          <IssuesInfo>
            <div>
              <img src={GitIcon} alt="" />
              <span>{repo?.user.login}</span>
            </div>
            <div>
              <img src={CalendarIcon} alt="" />
              <span>
                {formatDistanceToNow(new Date(repo?.created_at ?? new Date()), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>
            <div>
              <img src={CommentIcon} alt="" />
              <span>{repo?.comments} comentários</span>
            </div>
          </IssuesInfo>
        </IssuesModule>
      </IssuesContainer>
      <ArticleContainer>
        <ArticleBox>
          <div>
            <ParagraphBox>
              <ReactMarkDown>{repo?.body ?? ''}</ReactMarkDown>
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
