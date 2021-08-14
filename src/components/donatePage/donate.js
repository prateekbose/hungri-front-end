import { animated, useSpring } from 'react-spring';
import * as easings from 'd3-ease'
import RevealText from '../RevealText/reveal'

export default function Donate({setPage, page, setData, data}){

    const Appear = (index) => useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 300 + (index)*300,
        config: {
            duration: 900,
            easing: easings.easeCubic
        }
    })

    const setDataPage = (type) => {
        let newData = data
        newData.type = type
        setData(newData)
        setPage(type)
    }

    return (
        <div className="donate-section">
            <h1><RevealText text={"Support Your Community"} page={(page==="Donate")}/></h1>
            <animated.div style={Appear(3)} className="donate-items">
                <div className="donate-item" onClick={() => setDataPage("Food")}>
                    <div className="donate-img">
                       <div className="item-img food"></div>
                    </div>
                    <h1 className="item-head">Donate Food</h1>
                    <p className="item-desc">Donate food to dependents in underserved communities</p>
                </div>
                <div className="donate-item" onClick={() => setDataPage("Waste")}>
                    <div className="donate-img">
                        <div className="item-img waste"></div>
                    </div>
                    <h1 className="item-head">Donate Waste</h1>
                    <p className="item-desc">Donate wasted food for compost production for better waste management</p>
                </div>
            </animated.div>
        </div>
    )
}