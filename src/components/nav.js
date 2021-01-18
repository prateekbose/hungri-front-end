import React from 'react'

class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            navOpen: false
        }
        this.burgerClick = this.burgerClick.bind(this)
    }

    burgerClick(){
        this.setState({
            navOpen: !this.state.navOpen
        })
    }

    render(){
        return ([
            <nav>
                <div className={`nav-left ${(this.state.navOpen)?'nav-active':''}`}>
                    <div className="nav-section">
                        <h1 className="nav-header">hungri</h1>
                        <div className="nav-links">
                            <a href="#">Check Status</a>
                            <hr/>
                            <a href="./donate">Donate Food</a>
                            <hr/>
                            <a href="./donate-waste">Donate Waste</a>
                            <hr/>
                            <a href="#">Donation Centres</a>
                            <hr/>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <div className="nav-visible">
                        <div className="burger" onClick={this.burgerClick}>
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                            <div className="line line3"></div>
                        </div>                        
                        <a href="./"><h1 className="visible-header">hungri</h1></a>
                    </div>
                </div>                
            </nav>,
            <nav className={`mobile-nav ${(this.state.navOpen)?'nav-active':''}`}>
                <div className="nav-visible">
                        <a href="./"><h1 className="visible-header">hungri</h1></a>
                        <div className="burger" onClick={this.burgerClick}>
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                            <div className="line line3"></div>
                        </div>                        
                    </div>
            </nav>
        ])
    }
}

export default NavBar