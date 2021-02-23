import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'

const DetailsDonate = ({  nextDonate, page, donate, setDonateSize }) => {

    const [activeIndex, setActiveIndex] = useState(null)
    const [name, setName] = useState('')
    const [addr, setAddr] = useState('')
    const [phone, setPhone] = useState('')

    const Appear = (delay) => useSpring({
        from: {
            marginLeft: -10,
            opacity: 0
        },
        to: {
            marginLeft: (donate && page === "About")?0:-10,
            opacity: (donate && page === "About")?1:0
        },
        delay: 600 + (delay * 300),
        config: {
            duration: 300,
            easing: easings.easeCubic
        }
    })

    const setOptionActive = (index) => {
        setDonateSize(index)
        setActiveIndex(index)
    }

    return (
        <div className="donate-about">
            <animated.h1 style={Appear(0)}>Could you tell about yourself?</animated.h1>
            <div className="details-donate">
                <animated.p style={Appear(1)}>I am <input type="text" name="name" placeholder="John Doe" onChange={(event) => setName(event.target.value)}></input></animated.p>
                <animated.p style={Appear(2)}>My address is <input type="text" name="address" placeholder="MG Road, Bangalore" onChange={(event) => setAddr(event.target.value)}></input></animated.p>
                <animated.p style={Appear(3)}>I can be contacted on my phone <input type="tel" name="phone" placeholder="+91 1234567890" pattern="{+91}{1} [0-9]{10}" onChange={(event) => setPhone(event.target.value)}></input></animated.p>
            </div>
            <animated.button style={Appear(4)} className="button" onClick={() => nextDonate({Name: name, Address: addr, Phone: phone})}>Next</animated.button>
        </div>
    )
}

export default DetailsDonate