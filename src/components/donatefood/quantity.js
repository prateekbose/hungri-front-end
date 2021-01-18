import React, {useState} from 'react';
import './donatefood.css';

function Quantity({setPage ,setUserData, userData}) {

    const clickHandler = () => {
      setPage(2);
      console.log(quantity);
      setUserData({...userData, quantity: quantity })

    }
    const [quantity, setQuantity] = useState('');

    return (
      <div className="container">
        <div className="headerContainer">Food Quantity</div>
        <div className="personalContainer">Select the Categegory for the required food quantity</div>
        <div className='cardContainer'>
            <div className={`${quantity==='Home'?'selectedcards':'cards qty-card'}`}  onClick={()=> {setQuantity('Home')}}>
                <div className='cardHeader'>Home</div>
                <div className='cardcontent'>
                    <div className='cardup'>1KG to 5KGs</div>
                    <div className='carddown'>lorem ipsum</div>
                </div>
            </div>
            <div className={`${quantity==='Party'?'selectedcards':'cards qty-card'}`} onClick={()=> {setQuantity('Party')}}>
                <div className='cardHeader'>Party</div>
                <div className='cardcontent'>
                    <div className='cardup'>5KGs to 10KGs</div>
                    <div className='carddown'>lorem ipsum</div>
                </div>
            </div>
            <div className={`${quantity==='Office'?'selectedcards':'cards qty-card'}`} onClick={()=> {setQuantity('Office')}}>
                <div className='cardHeader'>Office</div>
                <div className='cardcontent'>
                    <div className='cardup'>10KGs to 15KGs</div>
                    <div className='carddown'>lorem ipsum</div>
                </div>
            </div>
        </div>
        <div className='bottomContainer'>
        <button className='nextContainer' onClick={clickHandler}>NEXT</button>
        </div>
        
      </div>
    );
  }

export default Quantity;