import React from 'react'

const data = [
    [
        ["519.6 million adults and children in Asia consume too few calories", "which accounts for about 12% of the total population of Asia"],
        ["Southern Asia had the highest Global Hunger Index (GHI) score of 30.9", "indicating serious levels of hunger"],
        "./assets/img/hero/asia.jpg"
    ],
    [
        ["The coronavirus pandemic has left millions of families without stable employment.", "More than 50 million people, including 17 million children, may experience food insecurity."],
        ["22 million children in America rely on the free or reduced-price lunch they receive at school", "but as many as 3 million children still aren't getting the breakfast they need."],
        "./assets/img/hero/america.jpg"
    ]
]

var bgImage = new Image()

class HeroSection extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            heroIndex: 0,
            bgLoaded: false
        }
        this.nextHero = this.nextHero.bind(this)
        this.prevHero = this.prevHero.bind(this)
        bgImage.src = data[this.state.heroIndex][2]
        bgImage.onload = () => {
            this.setState({
                bgLoaded: true
            })
        }
    }

    nextHero(){
        if(this.state.heroIndex < data.length-1){
            this.setState({
                heroIndex: this.state.heroIndex + 1
            })
            this.setState({
                bgLoaded: false
            })
            
            bgImage.src = data[this.state.heroIndex][2]
            bgImage.onload = () => {
                setTimeout(() => {                
                    bgImage.src = data[this.state.heroIndex][2]
                    bgImage.onload = () => {
                        this.setState({
                            bgLoaded: true
                        })
                    }
                }, 1000)
            }
        } 
    }

    prevHero(){
        if(this.state.heroIndex > 0){
            this.setState({
                heroIndex: this.state.heroIndex - 1
            })

            this.setState({
                bgLoaded: false
            })
            
            bgImage.src = data[this.state.heroIndex][2]
            bgImage.onload = () => {
                setTimeout(() => {                
                    bgImage.src = data[this.state.heroIndex][2]
                    bgImage.onload = () => {
                        this.setState({
                            bgLoaded: true
                        })
                    }
                }, 1000)
            }
        } 
    }

    render(){
        return([
            <div className="hero-section" style={{backgroundImage: `url(${data[this.state.heroIndex][2]})`}}>
                <div className={`hero-content ${(!this.state.bgLoaded)?'hide':''}`}>
                    <div>
                        <h1>{data[this.state.heroIndex][0][0]}</h1>
                        <p>{data[this.state.heroIndex][0][1]}</p>
                    </div>
                    <div>
                        <h1>{data[this.state.heroIndex][1][0]}</h1>
                        <p>{data[this.state.heroIndex][1][1]}</p>
                    </div>
                </div>
                <div className={`hero-mobile-content ${(!this.state.bgLoaded)?'hide':''}`}>
                    <div>
                        <h1>{data[this.state.heroIndex][0][0]}</h1>
                        <p>{data[this.state.heroIndex][0][1]}</p>
                    </div>
                </div>
            </div>,
            <nav>
                <div className="nav-right">
                    <a className="donate-button" href="./donate">
                        <div className="donate-button">
                            <h1>donate</h1>
                        </div>  
                    </a>
                    <div className="slider">
                        <div className={`slide ${(this.state.heroIndex === 0)? 'slide-active' : ''}`}></div>
                        <div className={`slide ${(this.state.heroIndex === 1)? 'slide-active' : ''}`}></div>
                    </div>
                    <div className="buttons">
                        <button className="up" onClick={this.prevHero}><i className={`fas fa-arrow-up ${(this.state.heroIndex === 0)?'disabled':''}`}></i></button>
                        <button className="down" onClick={this.nextHero}><i className={`fas fa-arrow-down ${(this.state.heroIndex === (data.length-1))?'disabled':''}`}></i></button>
                        <button className="share"><i className="fas fa-share-alt"></i></button>
                    </div>
                </div>
            </nav>,
            <div className={`bg-loading slide1 ${(this.state.bgLoaded)?'bg-loaded':''}`}>
                <h1>hungri</h1>
            </div>,
            <a href="#" className="mobile-donate">
                <h1>Donate</h1>
            </a>
        ])
    }
}

export default HeroSection