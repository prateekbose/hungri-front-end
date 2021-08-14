import { useState, lazy, Suspense, useEffect } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import * as easings from 'd3-ease'
import AboutDonate from './typeDonate'
const DetailsDonate = lazy(() => import('./aboutDonate'))
const SizeDonate = lazy(() => import('./sizeDonate'))
const FinishDonate = lazy(() => import('./finishDonate'))

const Donate = ({ page, setPage, setDonateSize }) => {

    const [donatePage, setDonatePage] = useState("About")
    const [index, setIndex] = useState(0)

    var [donateDetails, setDonateDetails] = useState({})

    const sendRequest = () => {
        console.log(donateDetails)
        var xhr = new XMLHttpRequest()
        var url = ""
        var temp = donateDetails
        if(donateDetails.type === 0){
            url = "https://hungri-back-end.herokuapp.com/food"
            temp["orderType"] = "Food"
        } else {
            url = "https://hungri-back-end.herokuapp.com/waste"
            temp["orderType"] = "Waste"
        }     
        temp["timestamp"] = Date.now()   
        xhr.open("POST", url, true)
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText)
                console.log(json)
            }
        }
        var data = JSON.stringify(temp)
        xhr.send(data)
    }

    const nextDonate = (data) => {
        if(index < 2){
            setIndex(index+1)
            var temp = donateDetails
            for(var key in data){
                temp[key] = data[key]
            }
            setDonateDetails(temp)
        }
        if(index === 2){
            setIndex(index+1)
            sendRequest()
        }
        console.log(index)        
        console.log(donateDetails)
    }

    

    useEffect(() => {
        console.log(donateDetails)
    }, [donateDetails])

    const Donate = useSpring({
        from: {
            zIndex: -1,
            backgroundColor: 'rgba(255,255,255,0)'
        },
        to: {
            zIndex: (page === "Donate")?998:-1,
            backgroundColor: (page === "Donate")?'rgba(255,255,255,1)':'rgba(255,255,255,0)'
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