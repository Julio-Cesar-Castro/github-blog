import { Post } from './Post'
import { PostContainer, IssuesContainer } from './styles'

export function Issues() {
  return (
    <IssuesContainer>
      <PostContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostContainer>
    </IssuesContainer>
  )
}
