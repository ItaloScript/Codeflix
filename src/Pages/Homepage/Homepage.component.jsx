import React from 'react'
import {Route, Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Homepage.styles.css'

const Homepage = props => (
    <div className="Background">
        <div className="title">
            <img className="logo"src={logo}/>
            <h1>Unlimited technology<br/> content and more.</h1>
            <span>Watch anywhere. Cancel at any time.</span>
            <br/>
            <button className="join" onClick = {() => props.history.push('/login')} >
                {"Try 30 days Free ".toUpperCase()}
            <span className="arrow">&#8250;</span>
            </button>
        </div>
    </div>
    
)

export default Homepage