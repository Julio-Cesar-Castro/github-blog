import { IssuesType } from '..'
import {
  DateSpan,
  PostDescription,
  PostInfo,
  PostModule,
  PostTitle,
} from './styles'

import ReactMarkDown from 'react-markdown'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { NavLink } from 'react-router-dom'

export function Post({ title, body, createdAt, number }: IssuesType) {
  return (
    <NavLink to={`/issue/${number}`}>
      <PostModule>
        <PostInfo>
          <PostTitle>{title}</PostTitle>
          <DateSpan>
            {formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
              locale: ptBR,
            })}
          </DateSpan>
        </PostInfo>
        <PostDescription>
          <ReactMarkDown>{body}</ReactMarkDown>
        </PostDescription>
      </PostModule>
    </NavLink>
  )
}
