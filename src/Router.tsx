import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './Layout/DefaultLayout'
import { Home } from './Pages/Home'
import { Issues } from './Pages/Issues'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Issues" element={<Issues />} />
      </Route>
    </Routes>
  )
}
