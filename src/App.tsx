import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { Form } from './components/Form'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />

      <Profile />

      <Form />
    </ThemeProvider>
  )
}