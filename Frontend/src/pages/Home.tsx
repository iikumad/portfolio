import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import main from '../assets/home.png'


export default function Home() {
const navigate = useNavigate();
const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div className='home'>
        <div className='left'>
        <p className='greet'>
            Hello, I am
        </p>
        <span className='name'>
            Benabdallah Youcef
        </span>
        <p className='title'>
            Full stack web Developer
        </p>
        <div className='left-text'>
        Welcome to my portfolio! I’m a Full Stack Web Developer with expertise in both front-end and back-end technologies like HTML, CSS, JavaScript, React, Node.js, and databases. I’m passionate about creating responsive, user-friendly websites and applications with clean, efficient code. Always eager to learn and grow, I strive to deliver high-quality solutions that make a real impact. Feel free to explore my work and get in touch!
        </div>
        <div>        
            <button onClick={handleClick} className='btn-primary'>Contact Me</button>
        </div>
        <div className='Socials'>
            <span>Check my</span>
            <Link to='/'><img className='social-link' src={facebook}></img></Link>
            <Link to='/'><img className='social-link' src={instagram}></img></Link>
        </div>
        </div>
        <div className='home-right'>
            <img className='main-image' src={main}/>
        </div>
    </div>
  )
}
