import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import './Resume.css'

function Resume() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
    }, [])
    return (
        <div className='resume__Page'>
            <iframe className='resume' title='resume' seamless src="https://drive.google.com/file/d/11UgJnpUf-Ra8iCZaguTgBzhNBqbW36-a/preview" onLoad={(e) => setLoading(false)} style={loading ? {display: 'none'} : {}}/>
            {
                loading ? 
                <div style={{position: 'fixed', display: 'flex', flexDirection: 'column', right: "48%", top: "50%", justifyContent: 'center', alignItems: 'center', zIndex: 2000}}>
                    <CircularProgress/> 
                </div>
                : 
                <></>
            }
            {
                !loading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 10, marginBottom: 60}}>
                    <a href={`${process.env.PUBLIC_URL}/Devon_McDonald_Resume_04_26_21.pdf`} target='_blank' download className='resume__DownloadLink'>
                        <button className='resume__DownloadButton'>Download Resume</button>
                    </a>
                </div>
            }
        </div>
    )
}

export default Resume;
