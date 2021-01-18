import React, {useState} from "react";
import Address from './address';
import Quantity from "./quantity";
import './donatefood.css';
import TypeFood from "./typefood";
import Pickup from "./pickup";
import Thankyou from "./thankyou";

function Donatefood(){

  const [page, setPage] = useState(0);
  const [userData,setUserData] = useState({
    firstName:'',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    typeHouse: '',
    quantity: '',
    typeFood: '',
    pickup: '',
    orderType: 'Food'
  })

  const pages = [<Address setPage={setPage} setUserData={setUserData} userData={userData}/>, 
    <Quantity setPage={setPage} setUserData={setUserData} userData={userData}/>, 
    <TypeFood setPage={setPage} setUserData={setUserData} userData={userData}/>, 
    <Pickup setPage={setPage} setUserData={setUserData} userData={userData}/>, 
    <Thankyou/>]
  const pageName = ["personal details", "quantity", "food type", "pickup time", 'thank you']

  return ([
    pages[page],
            <nav>
                <div className="nav-right donate-nav-right">
                      <div className="donate-button donate-page">
                          <h1>{pageName[page]}</h1>
                      </div>  
                    <div className="slider">
                        <div className={`slide ${(page === 0)? 'slide-active' : ''}`}></div>
                        <div className={`slide ${(page === 1)? 'slide-active' : ''}`}></div>
                        <div className={`slide ${(page === 2)? 'slide-active' : ''}`}></div>
                        <div className={`slide ${(page === 3)? 'slide-active' : ''}`}></div>
                        <div className={`slide ${(page === 4)? 'slide-active' : ''}`}></div>
                    </div>
                    <div className="buttons donate-buttons">
                        <button className="down" onClick={() => {
                          if(page != 0){
                            setPage(page-1)
                          }
                        }}><i className={`fas fa-arrow-left ${(page == 0)?'disabled':''}`}></i></button>
                    </div>
                </div>
            </nav>
  ])
  
}

export default Donatefood;
