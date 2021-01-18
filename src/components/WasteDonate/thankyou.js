import React from 'react';
import './donatewaste.css';

function Thankyou({setUserData, userData}) {

    const clickHandler = () => {
      setUserData({...userData});
      console.log(userData);
    }

    return (
      <div className="container">
        <div className="headerContainer">Thank you for donating the Wasted food </div>
        <div className="personalContainer">This will be used for Manure and Compost production</div>
        <div className="personalContainer">Would love to hear from you again</div>
        <div className='bottomContainer'>
        <button className='nextContainer' onClick={clickHandler}>SUBMIT</button>
        </div>
        
      </div>
    );
  }

export default Thankyou;