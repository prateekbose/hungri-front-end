import React, { useState } from 'react';
import './donatewaste.css';

function Pickup({setPage ,setUserData, userData}) {

    const clickHandler = () => {
      setPage(4);
      console.log(pickup);
      setUserData({...userData, pickup: pickup })
      console.log(userData);
    }
    const [pickup,setPickup] = useState('');

    return (
      <div className="container">
        <div className="headerContainer">Choose Pickup Time</div>
        <div className="personalContainer">What time are you available for Pickup</div>
        <div className='cardContainer'>
            <div className={`${pickup==='Afternoon'?'selectedbcards':'bcards'}`} onClick={()=> {setPickup('Afternoon')}}>
                <div className='bcardHeader'>1pm to 4pm</div>   
                <div className='bcarddown'>Afternoon</div>
            </div>
            <div className={`${pickup==='Evening'?'selectedbcards':'bcards'}`} onClick={()=> {setPickup('Evening')}}>
                <div className='bcardHeader'>4pm to 8pm</div>
                <div className='bcarddown'>Evening</div>
            </div>
            <div className={`${pickup==='Late night'?'selectedbcards':'bcards'}`} onClick={()=> {setPickup('Late night')}}>
                <div className='bcardHeader'>8pm to 12pm</div>
                <div className='bcarddown'>Late night</div>
            </div>
        </div>
        <div className='bottomContainer'>
        <button className='nextContainer' onClick={clickHandler}>NEXT</button>
        </div>
        
      </div>
    );
  }

export default Pickup;