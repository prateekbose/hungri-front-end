import { useState, useEffect, lazy, Suspense } from 'react'
import logo from './logo.svg'
import NavBar from './components/nav'
import HeroSection from './components/hero'
const Donate = lazy(() => import('./components/donate'))

const App = () => {

  const [loadingState, setLoadingState] = useState(false)
  const [page, setPage] = useState("Donate")

  const [donateSize, setDonateSize] = useState(null)

  useEffect(() => {
    window.addEventListener('load', (event) => setLoadingState(true))
  }, [])

  useEffect(() => {
    console.log(page)
  }, [page])

  return [
    <NavBar loading={loadingState} page={page}/>,
    <HeroSection loading={loadingState} page={page} setPage={setPage}/>,
    <Suspense fallback={<div></div>}>
      <Donate page={page} setPage={setPage} setDonateSize={setDonateSize}/>
    </Suspense>
  ]
}

export default App;
