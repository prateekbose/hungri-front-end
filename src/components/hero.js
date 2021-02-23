import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'

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

    const ImageAppear = useSpring({
        from: {
            width: "0%",
            opacity: 0
        },
        to: {
            width: (loading && page==="Home")?"100%":"0%",
            opacity: (loading && page==="Home")?1:0
        },
        delay: 2200,
        config: {
            duration: 1200,
            easing: easings.easeCubicIn
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
                    <animated.h1 style={TextAppear(0)}>Donate Now.</animated.h1>
                    <animated.h1 style={TextAppear(1)}>Help Save Lives.</animated.h1>
                </div>
                <animated.p style={TextAppear(2)}>
                    Help us empower communities, and ensure more children can grow up strong.
                </animated.p>
                <div className="hero-button-section">
                    <animated.button style={ButtonAppear(0)} className="button" onClick={DonateButton}>
                        Donate Food
                    </animated.button>
                    <animated.button style={ButtonAppear(1)} className="button-alt">
                        Share
                    </animated.button>
                </div>
            </div>
            <animated.div className="hero-image" style={ImageAppear}></animated.div>
        </div>
    )
}

export default HeroSection