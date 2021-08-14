import { useState, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'
import RevealText from '../RevealText/reveal'

export default function HeroSection({setPage, page}){

    const [linkActive, setLinkActive] = useState(false)

    useEffect(() => {
        document.title = "hungri | Home"
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
            duration: 600,
            easing: easings.easeCubic
        }
    })

    const linkCopy = () => {
        setLinkActive(true)
        navigator.clipboard.writeText("https://hungri.vercel.app/")
        setTimeout(() => {
            setLinkActive(false)
        }, 1500)
    }

    return [
        <div className={`link-copied ${(linkActive)?'link-active':''}`}>
            <h3>Copied linked to clipboard</h3>
        </div>,
        <div className="hero-section">
            <div className="hero">
                <h1><RevealText text={"Together We Can Change The World"} page={(page==="Home")}/></h1>
                <animated.p style={Appear(3)}>Connects donors and infrastructure to help the hungry</animated.p>
                <div className="hero-btn">
                    <animated.button style={Appear(4)} className="btn" onClick={() => setPage("Donate")}>Donate</animated.button>
                    <animated.button style={Appear(5)} className="btn btn-alt" onClick={() => linkCopy()}>Share</animated.button>
                </div>
            </div>
            <animated.div style={Appear(0)} className="hero-img"></animated.div>
        </div>
    ]
}