import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'

const AboutDonate = ({ nextDonate, page, donate, setDonateSize }) => {

    const [activeIndex, setActiveIndex] = useState(null)

    const Appear = (delay) => useSpring({
        from: {
            marginLeft: -10,
            opacity: 0
        },
        to: {
            marginLeft: (donate && page === "About")?0:-10,
            opacity: (donate && page === "About")?1:0
        },
        delay: 3400 + (delay * 300),
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
            <animated.h1 style={Appear(0)}>Tell us about the donation</animated.h1>
            <animated.div className="donate-options" style={Appear(1)}>
                <div className={`donate-option ${(activeIndex === 0)?'donate-option-active':''}`} onClick={() => setOptionActive(0)}>
                    <h1>I would like to donate food to feed the poor</h1>
                    <p>I have leftover food that I would like to donate that I have no use for.</p>
                </div>
                <div className={`donate-option ${(activeIndex === 1)?'donate-option-active':''}`} onClick={() => setOptionActive(1)}>
                    <h1>I would like to donate food for recycling</h1>
                    <p>I have wasted or scrap food that I would like to be utilized for composting, or for biogas production.</p>
                </div>
            </animated.div>
            <animated.button style={Appear(2)} className="button" onClick={() => nextDonate({type: activeIndex})}>Next</animated.button>
        </div>
    )
}

export default AboutDonate