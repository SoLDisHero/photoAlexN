import React, { useEffect, useRef, useState } from 'react';
import "../pages/contact.scss";
import Sidebar from '../components/Sidebar';
import Loader from 'react-loaders';
import pic from "../assets/images/Alex.png";
import emailjs from "@emailjs/browser";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSend, setIsSend] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if(name && email && subject && message) {
            emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
            }, (error) => {
                console.log(error.text);
            })
        }
    }

    const handleClick = (e) => {
        if(name === "" && email === "" && subject === "" && message === ""){
            setIsSend(true);
        }else{
            setIsSend(false);
        }
    }

    useEffect(() => {
        if(isSend) {
            const timer = setTimeout(() => {
                setIsSend(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isSend])
  return (
    <div className='contact-page'>
        <div className="navbar animate__animated animate__bounceInLeft animate__delay-1s">
            <Sidebar/>
        </div>
        <div className='contact-content'>
            <div className='contact-image'>
                <img src={pic} alt='alex'/>
            </div>
            <div className='greeting'>
                <h2>Hi, I'm Alex.</h2>
                <p className='animate__animated animate__fadeIn animate__delay-1s'>
                I was born in Belarus, which was then part of the Soviet Union. 
                I graduated from the University of Transportation in 1973 and worked as an engineer until the year 2000. 
                Seeking a better future for my children, I participated in the green card lottery. <br/><br/>
                In 2000, at the age of 50, I won the green card lottery and moved to the USA to embark on a new life, 
                despite having no knowledge of the language and no Western education. 
                I initially started my employment journey as a pizza delivery driver and progressed to become 
                a Supervisor for the city of Minneapolis.   <br/><br/>
                Photography is a passion of mine, leading me to explore different corners of the Earth. 
                It gives me a sense of purpose and the belief that I can still contribute to society. 
                My involvement in photography is my way of sharing the message that life is Good.
                </p>
                <div className='form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' placeholder='Name' name='name' value={name} onChange={e => setName(e.target.value)} required/>
                            </li>
                            <li className='half'>
                                <input type='email' placeholder='Email' name='email' value={email} onChange={e => setEmail(e.target.value)} required/>
                            </li>
                            <li>
                                <input type='text' placeholder='Subject' name='subject' value={subject} onChange={e => setSubject(e.target.value)} required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' value={message} onChange={e => setMessage(e.target.value)} required>
                                </textarea>
                            </li>
                            <li>
                                <input type='submit' className='button' value={isSend ? "SUBMITTING" : "SUBMIT"} onClick={handleClick}/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>            
        </div>
        <Loader type='ball-spin-fade-loader'/>
    </div>
  )
}

export default Contact