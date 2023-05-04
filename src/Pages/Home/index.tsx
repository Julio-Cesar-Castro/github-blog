import { Form } from './components/Form'
import { Issues } from './components/Issues'
import { Profile } from './components/Profile'

export function Home() {
  return (
    <>
      <Profile />
      <Form />
      <Issues />
    </>
  )
}
