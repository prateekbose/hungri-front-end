import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'
import RevealText from './RevealText'

const HeroSection = ({ loading, page, setPage }) => {

    const TextAppear = (delay) => useSpring({
        from: {
            marginLeft: -10,
            opacity: 0
        },
        to: {
            marginLeft: (loading && page==="Home")?0:-10,
            opacity: (loading && page==="Home")?1:0
        },
        delay: (delay * 450),
        config: {
            duration: 600,
            easing: easings.easeCubic
        }
    })

    const ButtonAppear = (delay) => useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: (loading && page==="Home")?1:0
        },
        delay: 1600 + (delay * 300),
        config: {
            duration: 600,
            easing: easings.easeCubic
        }
    })

    const DonateButton = () => {
        setPage("Donate")
    }

    return (
        <div className="hero">
            <div className="hero-section">
                <div>
                    <h1><RevealText text={"Donate Now"}/></h1>
                    <h1><RevealText text={"Help Save Lives"}/></h1>
                </div>
                <animated.p style={TextAppear(2)}>
                    Help us empower communities, and ensure more children can grow up strong.
                </animated.p>
                <div className="hero-button-section">
                    <animated.button style={ButtonAppear(0)} className="button" onClick={DonateButton}>
                        Donate Food
                    </animated.button>
                </div>
            </div>
            <div className="hero-image"></div>
        </div>
    )
}

export default HeroSection