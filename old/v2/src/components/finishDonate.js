import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'

const FinishDonate = ({  nextDonate, page, donate, setDonateSize }) => {

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
            <animated.h1 style={Appear(0)}>You are awesome</animated.h1>
            <div className="details-donate">
                <animated.p style={Appear(1)}>Thank you for donating to help the hungry.</animated.p>
                <animated.p style={Appear(2)}>You can check the status of your request on 'See Requests'</animated.p>
                <animated.p style={Appear(3)}>In the meantime, you can see how you can recycle wasted food at home</animated.p>
            </div>
        </div>
    )
}

export default FinishDonate