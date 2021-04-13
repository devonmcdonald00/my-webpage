import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './AppBar.css'

function AppBar() {
    const [option, setOption] = useState(String(window.location.pathname).slice(1))

    const handleSelect = e =>{
        console.log(e.target.value)
        setOption(e.target.value)
    }

    return (
        <div className='appbar'>
            <div className='options'>
                <Link to='/'>
                    <button onClick={handleSelect} name='about-me' value='about-me' className='option__button' style={option === 'about-me' ? {borderBottom: '1px solid black'} : {}}>About Me</button>
                </Link>
                <Link to='/project-gallery'>
                    <button onClick={handleSelect} name='project-gallery' value='project-gallery' className='option__button' style={option === 'project-gallery' ? {borderBottom: '1px solid black'} : {}}>Project Gallery</button>
                </Link>
                <Link to='/resume'>
                    <button onClick={handleSelect} name='resume' value='resume' className='option__button' style={option === 'resume' ? {borderBottom: '1px solid black'} : {}}>Resume</button>
                </Link>
                <Link to='/contact-information'>
                    <button onClick={handleSelect} name='contact-information' value='contact-information' className='option__button' style={option === 'contact-information' ? {borderBottom: '1px solid black'} : {}}>Contact Information</button>
                </Link>
            </div>
        </div>
    )
}

export default AppBar
