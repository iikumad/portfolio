import React from 'react'
import ContactForm from '../components/ContactForm'
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import adress from '../assets/adress.png'

export default function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-left'>
        <h1 className='contact-title'>Let's Work Together</h1>
        <p className='contact-description'>
        Let’s work together to bring your ideas to life. With my skills and dedication, I’m confident we can create innovative, high-quality solutions that meet your needs. I’m passionate about collaboration and delivering results that make an impact. Let’s make it happen!
        </p>
        <div className='contact-info'>
        <div className='contact-info-con'><img src={phone} className='contact-info-image'/><div className='contact-label'>Phone<div className='contact-method'>+213 0676989852</div></div></div>
        <div className='contact-info-con'><img src={email} className='contact-info-image'/><div className='contact-label'>Email<div className='contact-method'>Mohgmx@gmail.com</div></div></div>
        <div className='contact-info-con'><img src={adress} className='contact-info-image'/><div className='contact-label'>Adress<div className='contact-method'>Djelfa/Algeria</div></div></div>
        </div>
      </div>
      <div >
          <ContactForm/>
      </div>
    </div>
  )
}
