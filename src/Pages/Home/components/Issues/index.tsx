import { useEffect, useState } from 'react'
import { Post } from './Post'
import { PostContainer, IssuesContainer } from './styles'
import axios from 'axios'

export interface IssuesType {
  title: string
  body: string
  createdAt: string
  number: number
}

interface DataApi {
  title: string
  body: string
  created_at: string
  number: number
}

export function Issues() {
  const [issues, setIssues] = useState<DataApi[]>([])

  useEffect(() => {
    axios
      .get('https://api.github.com/search/issues', {
        params: {
          q: ' repo:JulioCastro240902/github-blog',
        },
      })
      .then((res) => {
        return setIssues(res.data.items)
      })
  }, [])

  return (
    <IssuesContainer>
      <PostContainer>
        {issues.map((post: DataApi) => {
          return (
            <Post
              key={post.number}
              title={post.title}
              body={post.body}
              createdAt={post.created_at}
              number={post.number}
            />
          )
        })}
      </PostContainer>
    </IssuesContainer>
  )
}
