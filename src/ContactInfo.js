import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CircularProgress from '@material-ui/core/CircularProgress';
import './ContactInfo.css';
import checkmark from './static_assets/iconfinder_check-circle_2561353.png';
import error from './static_assets/iconfinder_multimedia-26_2849810.png';

export default function ContactInfo() {

    const [text, setText] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState({state: 0, message: ""})
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(0);

    const handleSendEmail = async () => {
        console.log("Send my email")
        setIsLoading(1);

        if(subject !== '' && text !== ''){
            const body = {
                "text": text,
                "subject": subject,
                "email": email,
            }
            const data = JSON.stringify(body);

            const response = await fetch('https://us-central1-nodemailer-63481.cloudfunctions.net/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data
            })

            const responseText = await response.text();

            if(response.status === 200 && responseText === 'Email sent successfully'){
                setMessage({state: 1, message: "Email successfully sent!", type: "success"})
            }
            else{
                setMessage({state: 1, message: "There was an error sending the email...", type: "error"})
            }

            setIsLoading(0);

        }
    }

    return (
        <div className="contact-info">
            {
                isLoading &&
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{minHeight: "100%", minWidth: "100%", backgroundColor: "white", position: "fixed", zIndex: 1000, opacity: "50%", marginTop: 0}}>
                    </div>
                    <div style={{position: 'fixed', display: 'flex', flexDirection: 'column', right: "48%", top: "50%", justifyContent: 'center', alignItems: 'center', zIndex: 2000}}>
                        <CircularProgress />
                    </div>
                </div>
            }
            <form>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h1 className='name' style={{color: 'black', border: 'none', marginBottom: 5, zIndex: 1, marginTop: 50, fontSize: 20}}>Please Email Me!</h1>
                    <TextField required id="standard-required" label="Subject" placeholder="Please enter subject line..." style={{maxWidth: 300, marginBottom: 40}} onChange={e => setSubject(e.target.value)} value={subject}/>
                    <TextField required id="standard-required" label="Contact Email" placeholder="Please enter a contact email..." style={{maxWidth: 300, marginBottom: 40}} onChange={e => setEmail(e.target.value)} value={email}/>
                    <TextareaAutosize aria-label="minimum height" rowsMin={40} placeholder="Please enter email text here..."  style={{width: 700, marginBottom: 40}} onChange={e => setText(e.target.value)} value={text}/>
                    {
                        message.state ? 
                        <div className={`message ${message.type}`}>
                            <img src={message.type === 'success' ? checkmark : error} alt='' style={{height: 15, width: 15, marginRight: 5}}/>
                            <p className='message-text'>{message.message}</p>
                        </div> : 
                        <></>
                    }
                    <input type="button" value="Send Email" className="email-button" onClick={handleSendEmail}></input>
                </div>
            </form>
        </div>
    )
}
