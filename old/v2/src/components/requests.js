import { useState, useEffect } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import * as easings from 'd3-ease'
const Donate = ({ page, setPage, setDonateSize }) => {

    const [donatePage, setDonatePage] = useState("About")
    const [index, setIndex] = useState(0)

    const [phone, setPhone] = useState('')
    const [request, setRequest] = useState(false)
    const [status, setStatus] = useState(false)
    const [serverDown, setServer] = useState('')

    const sendRequest = () => {
        console.log(phone)
        var xhr = new XMLHttpRequest()
        var url = "https://hungri-back-end.herokuapp.com/requests"
        var temp = {phone: phone} 
        xhr.open("POST", url, true)
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 202) {
                var res = JSON.parse(xhr.responseText)
                console.log(res["count"])
                setRequest(res["count"] > 0)
                setStatus(true)
            } else {
                setServer('Server error. Sorry for the inconvience')
                console.log("error")
            }
        }
        var data = JSON.stringify(temp)
        xhr.send(data)
    }

    useEffect(() => {
        console.log(`STATUS: ${request}`)
    }, [request])

    const Donate = useSpring({
        from: {
            zIndex: -1,
            backgroundColor: 'rgba(255,255,255,0)'
        },
        to: {
            zIndex: (page === "Requests")?998:-1,
            backgroundColor: (page === "Requests")?'rgba(255,255,255,1)':'rgba(255,255,255,0)'
        },
        delay: 600
    })

    const Appear = (delay) => useSpring({
        from: {
            marginLeft: -10,
            opacity: 0
        },
        to: {
            marginLeft: (page === "Requests")?0:-10,
            opacity: (page === "Requests")?1:0
        },
        delay: 2200 + (delay * 300),
        config: {
            duration: 300,
            easing: easings.easeCubic
        }
    })

    const ImageAppear = useSpring({
        from: {
            width: "0%",
            opacity: 0
        },
        to: {
            width: (page === "Requests")?"100%":"0%",
            opacity: (page === "Requests")?1:0
        },
        delay: 3400,
        config: {
            duration: 1200,
            easing: easings.easeCubicIn
        }
    })

    return (
        <animated.div className="donate-section" style={Donate}>
            <div className="donate-about">
            <animated.h1 style={Appear(0)}>Could you tell about the Request?</animated.h1>
            <div className="details-donate">
                <animated.p style={Appear(1)}>My Phone Number is <input type="tel" name="phone" placeholder="+91 1234567890" onChange={(event) => setPhone(event.target.value)}></input></animated.p>
                <p>{(status)?((request)?'Your request(s) are processed':'No request(s) associated with Phone Number'):serverDown}</p>
            </div>
            <animated.button style={Appear(2)} className="button" onClick={() => sendRequest()}>See Status</animated.button>
        </div>
            <animated.div className="hero-image" style={ImageAppear}></animated.div>
        </animated.div>
    )
} 

export default Donate