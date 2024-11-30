import { useState,useEffect,useRef  } from 'react'
import { Link, useLocation } from 'react-router-dom'
import menu from '../assets/menu.png'

export default function NavBar() {
  
  const [ActiveDrop,SetActiveDrop] = useState(false)
  const dropdownRef = useRef(null)
  const menuRef = useRef(null)  

  const handleDrop = () => {
    SetActiveDrop(prev => !prev); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the dropdown or menu icon
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          menuRef.current && !menuRef.current.contains(event.target)) {
        SetActiveDrop(false);  // Close the dropdown
      }
    };

    // Attach event listener to the document
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <nav className='navigation-bar'>
        <div className='logo'>Logo</div>
        <div className='nav-items'>
            <Link to='/' className={`nav-item ${location.pathname === '/' ? 'active-nav' : ''}`}>Home</Link>
            <Link to='about' className={`nav-item ${location.pathname === '/about' ? 'active-nav' : ''}`}>About Me</Link>
            <Link to='resume' className={`nav-item ${location.pathname === '/resume' ? 'active-nav' : ''}`}>Resume</Link>
            <Link to='projects' className={`nav-item ${location.pathname === '/projects' ? 'active-nav' : ''}`}>Projects</Link>
            <Link to='contact' className={`nav-item ${location.pathname === '/contact' ? 'active-nav' : ''}`}>Contact</Link>
          <img ref={menuRef} onClick={handleDrop} className= {ActiveDrop ? 'hidden' : 'menu'} src={menu}/>
          <div ref={dropdownRef} className={`drop-down ${ActiveDrop ? '' : 'hidden'}`}>
           <Link to='/' className={`nav-item-drop ${location.pathname === '/' ? 'active-nav' : ''}`}>Home</Link>
            <Link to='about' className={`nav-item-drop ${location.pathname === '/about' ? 'active-nav' : ''}`}>About Me</Link>
            <Link to='resume' className={`nav-item-drop ${location.pathname === '/resume' ? 'active-nav' : ''}`}>Resume</Link>
            <Link to='projects' className={`nav-item-drop ${location.pathname === '/projects' ? 'active-nav' : ''}`}>Projects</Link>
            <Link to='contact' className={`nav-item-drop ${location.pathname === '/contact' ? 'active-nav' : ''}`}>Contact</Link>
          </div>
        </div>
        {/* <div>
            <input className='nav-search-bar' type='text'></input>
        </div> */}
        {/* search bar */}
    </nav>
  )
}
