import React from 'react'
import './Intro.css'
import { Avatar } from '@material-ui/core'
import portfolioPic from './static_assets/portfolio-pic.png'

function Intro() {

    return (
        <div className='intro'>
            <img
                src='https://cxl.com/wp-content/uploads/2018/09/coding-language.jpg'
                alt=''
                className='background'
            />
            <Avatar style={{margin: 'auto', width: '200px', height: '200px', zIndex: 100}} alt='Devon McDonald' src={portfolioPic}/>
            <h1 className='name'>Devon McDonald</h1>
            <h1 className='about'>Computer Engineer Grad | Software Engineer</h1>
        </div>
    )
}

export default Intro
