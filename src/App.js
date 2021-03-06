import { useState, useEffect, lazy, Suspense } from 'react'
import logo from './logo.svg'
import NavBar from './components/nav'
import HeroSection from './components/hero'
const Donate = lazy(() => import('./components/donate'))
const Requests = lazy(() => import('./components/requests'))

const App = () => {

  const [loadingState, setLoadingState] = useState(false)
  const [page, setPage] = useState("Home")

  const [donateSize, setDonateSize] = useState(null)

  useEffect(() => {
    window.addEventListener('load', (event) => setLoadingState(true))
  }, [])

  useEffect(() => {
    console.log(page)
  }, [page])

  return [
    <NavBar loading={loadingState} page={page} setPage={setPage}/>,
    <HeroSection loading={loadingState} page={page} setPage={setPage}/>,
    <Suspense fallback={<div></div>}>
      <Donate page={page} setPage={setPage} setDonateSize={setDonateSize}/>
    </Suspense>,
    <Suspense fallback={<div></div>}>
      <Requests page={page} setPage={setPage} setDonateSize={setDonateSize}/>
    </Suspense>
  ]
}

export default App;
