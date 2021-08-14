import { useState } from 'react'
import './App.css';
import NavBar from './components/Nav/nav'
import HeroSection from './components/Hero/hero'
import Donate from './components/donatePage/donate'
import DonateType from './components/donateTypePage/donate'
import Requests from './components/requestsPage/requests'

function App() {

  const [page, setPage] = useState("Home")
  const [data, setData] = useState({
    type: "",
    name: "",
    address: "",
    phone: "",
    email: "",
    size: ""
  })

  const pages = {
    "Home": <HeroSection setPage={setPage} page={page}/>,
    "Donate": <Donate setPage={setPage} page={page} setData={setData} data={data}/>,
    "Food": <DonateType setData={setData} data={data} setPage={setPage}/>,
    "Waste": <DonateType setData={setData} data={data} setPage={setPage}/>,
    "Requests": <Requests setPage={setPage}/>
  } 

  return [
    <NavBar setPage={setPage}/>,
    pages[page],
  ]
}

export default App;
