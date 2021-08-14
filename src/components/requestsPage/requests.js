import { useState, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'
import { ArrowRight, Check, AlertCircle } from 'react-feather'
import RevealText from '../RevealText/reveal'

export default function DonateType({setPage}){

    const [fetchSuccess, setFetchState] = useState(false)
    const [fetch, setFetch] = useState(false)
    const [requests, setRequests] = useState(0)
    const [state, setState] = useState(false)
    const [prog, setProg] = useState(0)

    useEffect(() => {
        document.title = "hungri | Requests"
    }, [])

    const Appear = (index) => useSpring({
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

    const submitForm = (event) => {
        setProg(prog+1)
        var res = ""
        event.preventDefault()
        const data = new FormData(event.target)
        const phone = data.get('phone')
        var xhr = new XMLHttpRequest()
        var url = "https://hungri-back-end.herokuapp.com/requests"
        var temp = {phone: phone} 
        xhr.open("POST", url, true)
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {    
                setFetch(true)            
                if(xhr.status === 202){
                    res = JSON.parse(xhr.responseText)
                    console.log(res["count"])
                    setRequests(res["count"])
                    setFetchState(true)
                    if(res["count"] > 0){
                        setState(true)
                    }
                }
            }
        }
        var dataResponse = JSON.stringify(temp)
        xhr.send(dataResponse)
    }

    const buttonHandle = () => {
        if(fetch){
            setPage("Home")
        }
    }

    return (
        <div className="donate-type">
            <div className="donate-details">
                <div className="donate-step">
                    <animated.h1 style={Appear(2)} className={(prog === 0 || prog === 1) ?'active':''}>Phone</animated.h1>
                    <animated.h1 style={Appear(2)} className={(prog === 1)?'active':''}>Status</animated.h1>
                </div>
                <h1 className="donate-head"><RevealText text={"Enter your phone number"}/></h1>
                <form className="donate-form" onSubmit={submitForm}>
                    <animated.div style={Appear(2)} className={(fetch)?(state)?'donate-green':'donate-red':''}>
                        <h3>Phone</h3>
                        <input type="tel" pattern="[0-9]{10}" name="phone" required/>
                    </animated.div>
                        {(fetch)
                            ?(fetchSuccess)
                                ?(requests > 0)
                                    ?<h1 className="status status-green"><Check/>&nbsp;Your request(s) are processed</h1>
                                    :<h1 className="status status-red"><AlertCircle/>&nbsp;No request(s) associated with Phone Number</h1>
                                :<h1 className="status status-red"><AlertCircle/>&nbsp;Server error. Sorry for the inconvience.</h1>
                            :null
                        }
                    <animated.button style={Appear(5)} className="btn" type="submit" name="submit" onClick={() => buttonHandle()}>{(fetch)?"Home":"Next"}<ArrowRight/></animated.button>
                </form>
            </div>
        </div>
    )
}