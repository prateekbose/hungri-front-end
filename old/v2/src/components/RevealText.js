import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'

export default function RevealText({ text }){
    const textCon = text.split(" ")

    const Reveal = (index) => useSpring({
        from: {
            transform: `translateY(6rem)`
        },
        to: {
            transform: `translateY(0rem)`
        },
        delay: 300 + (index*index/3)*450,
        config: {
            duration: 900,
            easing: easings.easeCubic
        }
    })

    return textCon.map((item, index) => (
        <animated.span key={index} style={Reveal(index)}>{item}&nbsp;</animated.span>
    ))
}

RevealText.defaultProps = {
    text: ""
}