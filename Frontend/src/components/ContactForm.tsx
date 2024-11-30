import React, { useState } from 'react'

export default function ContactForm() {
  const [email,SetEmail] = useState<string>('')
  const [name,SetName] = useState<string>('')
  const [content,SetContent] = useState<string>('')
  const [Error,SetError] = useState<string|undefined>(undefined)
  const [emptyFields, setEmptyFields] = useState([])

  const getLastSubmitTime = () => {
    const lastSubmit = localStorage.getItem('lastSubmitTime');
    return lastSubmit ? parseInt(lastSubmit, 10) : 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const lastSubmitTime = getLastSubmitTime();
    const currentTime = Date.now();

    if (currentTime - lastSubmitTime < 60000) { 
      SetError("You can only send a message once every minute.");
      return;
    }

    const message = {email, name, content}
    if (content.length < 20)
    {
      return SetError("Message must be atleast 20 characters")
    }
    const response = await fetch('http://localhost:4000/api/messages/', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      SetError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      SetEmail('')
      SetName('')
      SetContent('')
      SetError(undefined)
      setEmptyFields([])
      localStorage.setItem('lastSubmitTime', currentTime);
    }
  }
  return (
    <form className='contact-form'>
        <h1 className='form-header'>Contact <span className='form-header-green'>Me!</span></h1>
        <div className='form-flex'>
          <input 
          onChange={(e) =>{SetName(e.target.value)}}
          value ={name} type='text' placeholder='Full Name' className={`contact-form-input ${emptyFields && emptyFields.includes('name') ? 'error' : ''}`}>
          </input>
          <div className='space'></div>
          <input
          onChange={(e) =>{SetEmail(e.target.value)}}
           value ={email} type='email' placeholder='Email Adress' className={`contact-form-input ${emptyFields && emptyFields.includes('email') ? 'error' : ''}`}>
          </input>
        </div>
           <textarea
           onChange={(e) =>{SetContent(e.target.value)}} 
           value ={content} placeholder='Your Message' className= {`contact-form-text ${emptyFields && emptyFields.includes('content') ? 'error' : ''}`} rows="4" cols="50"></textarea>
        <button onClick={handleSubmit} className='contact-form-submit'>Send Message</button>
        {Error && <div className="error">{Error}</div>}
    </form>
  )
}
