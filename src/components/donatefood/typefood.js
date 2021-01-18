import React,{useState} from 'react';
import './donatefood.css';

function TypeFood({setPage ,setUserData, userData}) {

    const clickHandler = () => {
        setPage(3);
        console.log(type);
        setUserData({...userData, typeFood: type })
      }
    const [type,setType] = useState('');

    return (
      <div className="container">
        <div className="headerContainer">Type of Food</div>
        <div className="personalContainer">What type of food do you have?</div>
        <div className='cardContainer'>
            <div className={`${type==='Dry'?'selectedbcards':'bcards'}`} onClick={() => {setType('Dry')}}>
                <div className='bcardHeader'>Dry</div>   
                <div className='bcarddown'>Bread, Flatbread etc</div>
            </div>
            <div className={`${type==='Non Dry'?'selectedbcards':'bcards'}`} onClick={() => {setType('Non Dry')}}>
                <div className='bcardHeader'>Non Dry</div>
                <div className='bcarddown'>Soup, Pasta etc</div>
            </div>
        </div>
        <div className='bottomContainer'>
        <button className='nextContainer' onClick={clickHandler}>NEXT</button>
        </div>
        
      </div>
    );
  }

export default TypeFood;