import React from 'react'
import homeIcon from './static_assets/icons8-home-128.png'
import studentIcon from './static_assets/icons8-student-male-96.png'
import workIcon from './static_assets/icons8-working-with-a-laptop-96.png'
import footballIcon from './static_assets/icons8-american-football-ball-128.png'
import circuitIcon from './static_assets/circuit.png'
import { Avatar } from '@material-ui/core'
import './AboutMe.css'

function AboutMe() {
    return (
        <div className='aboutMe'>
            <div className='aboutMe_Info'>
                <Avatar className='avatar' alt='home-icon' src={homeIcon} />
                <h1 className='info_Text'>Hello! My name is Devon McDonald. I am from and currently reside in Austin, TX. I love the city and enjoy doing things such as paddleboarding on the lake, going to Alamo Drafthouse, and going to Homeslice.</h1> 
            </div>
            <div className='aboutMe_Info'>
                <Avatar className='avatar' alt='football-icon' src={footballIcon} />
                <h1 className='info_Text'>In my spare time I enjoy cheering on the Dallas Cowboys, LSU Tigers, and Houston Astros and attend games as frequently as possible. I almost always have a book I am invested in; my favorite book being Fight Club. Lastly, I am an avid show watcher and always find my way back to rewatching Breaking Bad, the best show of all time.</h1> 
            </div>
            <div className='aboutMe_Info'>
                <Avatar className='avatar' alt='student-icon' src={studentIcon}/>
                <h1 className='info_Text'>I attended Louisiana State University in Baton Rouge, LA. I majored in Computer Engineering with a minor in Computer Science. I attended from 2017-2020 graduating a year early, and had the pleasure of seeing LSU win the national championship in New Orleans!</h1> 
            </div>
            <div className='aboutMe_Info'>
                <Avatar className='avatar' alt='work-icon' src={workIcon}/>
                <h1 className='info_Text'>I have had the opportunity to work on a variety of projects and in a variety of roles including Ethereum Blockchain researcher at LSU, an applications internship with Chevron, and a Software Engineer position with Dell Technologies.</h1> 
            </div>
            <div className='aboutMe_Info'>
                <Avatar className='avatar' alt='circuit-icon' src={circuitIcon}/>
                <h1 className='info_Text'>Because I decided to dedicate my time learning both hardware and software my skillset is broad, although I have focused mainly on software. I have experience with C++, Python, JavaScript, ReactJS (this webpage was built on ReactJS framework), Solidity, circuit analysis, PSpice, Verilog, ARM assembly, and much more.</h1> 
            </div>
        </div>

    )
}

export default AboutMe
