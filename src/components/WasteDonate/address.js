import React, {useState} from 'react';
import './donatewaste.css';

function Address({setPage, setUserData, userData}) {

    const clickHandler = () => {
      setPage(1);
      console.log(user);
      setUserData({...userData,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        address: user.address,
        typeHouse: user.typeHouse 
      })
    }

    const [user,setUser] = useState({
      firstName:'',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      typeHouse: ''
    })
    const fnameHandler = (event) => {
      setUser({...user, firstName:event.target.value});
    }
    const lnameHandler = (event) => {
      setUser({...user, lastName:event.target.value});
    }
    const emailHandler = (event) => {
      setUser({...user, email:event.target.value});
    }
    const phoneHandler = (event) => {
      setUser({...user, phone:event.target.value});
    }
    const addressHandler = (event) => {
      setUser({...user, address:event.target.value});
    }
    const radioHandler = (event) => {
      setUser({...user, typeHouse: event.target.value})
    }

    return (
      <div className="container">
        <h1 className="headerContainer">Donate</h1>
        <h3 className="personalContainer">Enter personal Details</h3>
        <form className="formContainer">
          <label className="labelName">
            First Name
            <input 
              type='text' 
              value={user.firstName} 
              name='first-name' 
              className='inputContainer'
              onChange={fnameHandler}
            ></input>
          </label>
          <label className="labelName">
            Last Name
            <input type='text' name='last-name' className='inputContainer' onChange={lnameHandler}></input>
          </label>
          <label className="labelName">
            Email Address
            <input type='text' name='email' className='inputContainer' onChange={emailHandler}></input>
          </label>
          <label className="labelName">
            Phone Number
            <input type='number' name='phone-number' className='inputContainer' onChange={phoneHandler}></input>
          </label>
          <label className="labelName">
            Address
            <input type='text' name='address' className='inputContainer' onChange={addressHandler}></input>
          </label>
        </form>
        <div className="labelName">
          What type of Address
          <div className="radioContainer">
            <input type="radio" value="Home" name="Address" onChange={radioHandler}/><div className='radioInput'>Home</div>
            <input type="radio" value="Community" name="Address" /> <div className='radioInput'>Community</div>
            <input type="radio" value="Office" name="Address" /> <div className='radioInput'>Office</div>
          </div>
        </div>
        <div className='bottomContainer'>
        <button className='nextContainer' onClick={clickHandler}>NEXT</button>
        </div>
        
      </div>
    );
  }

export default Address;