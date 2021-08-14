import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'
import { ArrowRight, Check } from 'react-feather'
import RevealText from '../RevealText/reveal'

export default function DonateType({setData, data, setPage}){

    const [step, setStep] = useState(1)
    const [submitStep, setSubmitStep] = useState(0)
    const [submit, setSubmit] = useState(false)

    const Appear = (index, state) => useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 300 + (index)*300,
        config: {
            duration: 900,
            easing: easings.easeCubic
        }
    })

    const buttonHandle = () => {
        if(submit){
            setPage("Home")
        }
    }

    const submitForm = (event) => {
        event.preventDefault()
        if(submitStep === 0){
            const formData = new FormData(event.target)
            let newData = data
            newData.name = formData.get('name')
            newData.address = formData.get('address')
            newData.phone = formData.get('phone')
            newData.email = formData.get('email')
            newData.size = formData.get('size')
            setData(newData)
            setSubmitStep(1)
            setStep(step+1)
        } else if (submitStep === 1) {
            console.log(data)
            var xhr = new XMLHttpRequest()
            var url = ""
            var temp = data
            if(data.type === "Food"){
                url = "https://hungri-back-end.herokuapp.com/food"
            } else {
                url = "https://hungri-back-end.herokuapp.com/waste"
            }     
            temp["timestamp"] = Date.now()   
            xhr.open("POST", url, true)
            xhr.setRequestHeader("Content-Type", "application/json")
            xhr.onreadystatechange = function () {                
                setSubmit(true)
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var json = JSON.parse(xhr.responseText)
                    console.log(json)
                }
            }
            var dataSent = JSON.stringify(temp)
            xhr.send(dataSent)
            
        }
    }


    return (
        <div className="donate-type">
            <div className="donate-details">
                <div className="donate-step">
                    <animated.h1 style={Appear(2, true)} className={(step>=1)?'active':''}>Personal Details</animated.h1>
                    <animated.h1 style={Appear(3, true)} className={(step>=2)?'active':''}>Finalize</animated.h1>
                </div>
                <h1 className="donate-head"><RevealText text={"Enter your personal details"}/></h1>
                <form className="donate-form" onSubmit={submitForm}>
                    <animated.div style={Appear(2, (1===step))} className={`form-name ${(submitStep === 1)?'input-disabled':''}`}>
                        <h3>Name</h3>
                        <input type="text" name="name" required disabled={(submitStep === 1)?true:false}/>
                    </animated.div>
                    <animated.div style={Appear(3, (1===step))} className={`form-addr ${(submitStep === 1)?'input-disabled':''}`}>
                        <h3>Address</h3>
                        <input type="text" name="address" required disabled={(submitStep === 1)?true:false}/>
                    </animated.div>
                    <animated.div style={Appear(4, (1===step))} className={`form-phone ${(submitStep === 1)?'input-disabled':''}`}>
                        <h3>Phone</h3>
                        <input type="tel" pattern="[0-9]{10}" name="phone" required/>
                    </animated.div>
                    <animated.div style={Appear(5, (1===step))} className={`form-email ${(submitStep === 1)?'input-disabled':''}`}>
                        <h3>Email</h3>
                        <input type="email" name="email" required disabled={(submitStep === 1)?true:false}/>
                    </animated.div>
                    <animated.div style={Appear(5, (1===step))} className="form-size">
                        <h3>Email</h3>
                        <animated.fieldset style={Appear(5, (1===step))}>
                            <div className="form-size-item">
                                <input type="radio" name="size" value="individual"/>
                                <h3>Individual</h3>
                            </div>
                            <div className="form-size-item">
                                <input type="radio" name="size" value="business"/>
                                <h3>Business</h3>
                            </div>
                        </animated.fieldset>
                    </animated.div>
                    {(submit)?<h1 className="status status-green"><Check/>&nbsp;Request Sent.</h1>:null}
                    <animated.button style={Appear(5, (1===step))} className={`btn ${(submitStep === 0)?'btn-next':'btn-submit'}`} type="submit" name="submit" onClick={() => buttonHandle()}>{(submit)?"Go Home":(submitStep === 0)?"Next":"Submit"}{(submit)?<ArrowRight/>:(submitStep === 0)?<ArrowRight/>:<Check/>}</animated.button>
                </form>
            </div>
        </div>
    )
}

DonateType.defaultProps = {
    data: {
        type: "",
        name: "",
        address: "",
        phone: "",
        email: "",
        size: ""
      }
}