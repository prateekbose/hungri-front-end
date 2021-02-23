import { useState, lazy, Suspense } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import * as easings from 'd3-ease'
import AboutDonate from './typeDonate'
const DetailsDonate = lazy(() => import('./aboutDonate'))
const SizeDonate = lazy(() => import('./sizeDonate'))
const FinishDonate = lazy(() => import('./finishDonate'))

const Donate = ({ page, setPage, setDonateSize }) => {

    const [donatePage, setDonatePage] = useState("About")
    const [index, setIndex] = useState(0)

    var donateDetails = {}

    const nextDonate = (data) => {
        if(index < 3){
            setIndex(index+1)
            for(var key in data){
                donateDetails[key] = data[key]
            }
            console.log(donateDetails)
        }
    }

    const Donate = useSpring({
        from: {
            zIndex: -1
        },
        to: {
            zIndex: (page === "Donate")?998:-1
        },
        delay: 600
    })

    const ImageAppear = useSpring({
        from: {
            width: "0%",
            opacity: 0
        },
        to: {
            width: (page === "Donate")?"100%":"0%",
            opacity: (page === "Donate")?1:0
        },
        delay: 3400,
        config: {
            duration: 1200,
            easing: easings.easeCubicIn
        }
    })

    const pages = [<AboutDonate nextDonate={nextDonate} page={donatePage} donate={(page === "Donate")} setDonateSize={setDonateSize}/>,
                   <DetailsDonate nextDonate={nextDonate} page={donatePage} donate={(page === "Donate")} setDonateSize={setDonateSize}/>,
                   <SizeDonate nextDonate={nextDonate} page={donatePage} donate={(page === "Donate")} setDonateSize={setDonateSize}/>,
                   <FinishDonate nextDonate={nextDonate} page={donatePage} donate={(page === "Donate")} setDonateSize={setDonateSize}/>]

    return (
        <animated.div className="donate-section" style={Donate}>
            <Suspense fallback={<div></div>}>
                {pages[index]}
            </Suspense>
            <animated.div className="hero-image" style={ImageAppear}></animated.div>
        </animated.div>
    )
} 

export default Donate