import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const StyledApp = styled.div`
  max-width: 500px;
  margin: 0 auto
`
const H1 = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`

function App() {
  return (
    <StyledApp>
      <H1>Github Find</H1>
      <Outlet />
    </StyledApp>
  )
}

export default App
