import React from 'react';
import './donatewaste.css';

function Thankyou({setUserData, userData}) {

    const clickHandler = () => {
      setUserData({...userData});
      console.log(userData);
      var xhr = new XMLHttpRequest();
      var url = "http://localhost:3001/food";
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
              var json = JSON.parse(xhr.responseText);
              console.log(json.email + ", " + json.password);
          }
      };
      var data = JSON.stringify(userData);
      xhr.send(data);
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