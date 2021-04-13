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
            <iframe className='resume' title='resume' src="https://docs.google.com/document/d/e/2PACX-1vRy6pPKeT34B_4bWwpPUQASP3RZXN-NAteue1wUXy5ZLBzoDomHnGGHdIWJ7v3laQ/pub?embedded=true" onLoad={(e) => setLoading(false)} style={loading ? {display: 'none'} : {}}/>
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
                    <Link to='/Devon_McDonald_Resume(12-17-2020).docx' target='_blank' download className='resume__DownloadLink'>
                        <button className='resume__DownloadButton'>Download Resume</button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Resume;
