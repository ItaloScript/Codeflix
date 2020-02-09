import React from 'react'
import videos from './banner.array'
import "./banners.styles.scss"


class Banner extends React.Component {
   
    constructor(props) {
    super(props)
        
    this.state = {
        banner: Math.floor(Math.random() * 3 )
    }
    }
 
    render(){
                 
        return(
            <div   style={{ background: `rgb(0, 0, 0) url('${videos[this.state.banner].img}') no-repeat`} } className="banner">
            <div className="titlebanner"><img src={videos[this.state.banner].title}></img></div>
            </div>
        )
    }
   
}

export default Banner