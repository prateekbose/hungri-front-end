import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'

const SizeDonate = ({ nextDonate, page, donate, setDonateSize }) => {

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
            <animated.h1 style={Appear(0)}>Tell us about the food</animated.h1>
            <animated.div className="donate-options" style={Appear(1)}>
                <div className={`donate-option ${(activeIndex === 0)?'donate-option-active':''}`} onClick={() => setOptionActive(0)}>
                    <h1>I have a lot of surplus food</h1>
                    <p>I would like to donate food in large amounts, for feeding or recycling.</p>
                </div>
                <div className={`donate-option ${(activeIndex === 1)?'donate-option-active':''}`} onClick={() => setOptionActive(1)}>
                    <h1>I want to donate on a personal level</h1>
                    <p>I don't have a lot of food, but would still like to donate to help in my own way.</p>
                </div>
            </animated.div>
            <animated.button style={Appear(2)} className="button" onClick={() => nextDonate({size: activeIndex})}>Next</animated.button>
        </div>
    )
}

export default SizeDonate