import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'

const NavBar = ({ loading, page }) => {

    const NavAppear = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: loading?1:0
        },
        delay: 4600,
        config: {
            duration: 600,
            easing: easings.easeCubic
        }
    })

    return (
        <animated.nav style={NavAppear}>
            <h1>hungri</h1>
            <a href="#" className={(page === "Donate"?'donate-see':'')}>See Requests</a>
        </animated.nav>
    )
}

export default NavBar