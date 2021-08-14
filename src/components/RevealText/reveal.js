import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'

export default function RevealText({text, page}){
    const textSplit = text.split(" ")

    const Reveal = (index) => useSpring({
        from: {
            transform: `translateY(100%)`
        },
        to: {
            transform: `translateY(${(page)?0:100}%)`
        },
        delay: 300 + (index*index/7)*450,
        config: {
            duration: 900,
            easing: easings.easeCubic
        }
    })

    return textSplit.map((it, i) => (
        <span className="reveal"><animated.span style={Reveal(i)}>{it}&nbsp;</animated.span></span>
    ))
}

RevealText.defaultProps = {
    text: "",
    page: true
}