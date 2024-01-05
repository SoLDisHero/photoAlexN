import React from 'react'
import "../pages/contact.scss"
import Sidebar from '../components/Sidebar'
import Loader from 'react-loaders'

function Contact() {
  return (
    <div className='contact-page'>
        <div className="navbar animate__animated animate__bounceInLeft animate__delay-1s">
            <Sidebar/>
        </div>
        <div className='contact-content'>
            <div className='greeting'>
                <h2>Hi, I'm Alex</h2>
                <p>
                I was born in Belarus ( former Soviet Union). 
                Graduated from University of transportation in 1973. 
                Worked as engineer till 2000. Played green card lottery, looking for better future for my kids.
                 In 2000 at the age of 50 won green card lottery,
                  and move to USA to start new life with zero language, 
                 and zero western education. Started employment as a pizza driver 
                 and finish it as Supervisor for the city of Minneapolis.
                 I like photography, which brings me to different places on Earth, 
                 and give me feeling that I still useful for society.
                  My participation in Fineartamerica web site is my effort to show people that life is Good.
                </p>
                <div className='form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type='text' placeholder='Name' name='name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' placeholder='Email' name='email' required/>
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required>
                                </textarea>
                            </li>
                            <li>
                                <input type='submit' className='button' value="SEND"/>
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