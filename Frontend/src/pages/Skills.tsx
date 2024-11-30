import React, { useState } from 'react'
import Skill from '../components/Skill'


export default function Skills() {
  const [ActiveElement,SetActiveEelemnt] = useState<string>('experience')

  const handleSelect = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const clickedElementId = event.currentTarget.id;
    SetActiveEelemnt(clickedElementId); // Update the ActiveElement state with the id of the clicked element
  };

  return (
    <div className='skills'>
      <div className='skills-left'>
        <h1 className='skills-left-title'>Why hire me ?</h1>
        <div className='skills-left-text'>I bring strong skills, dedication, and a commitment to delivering high-quality, tailored solutions. If you're looking for someone passionate about excellence, I’m the right fit for your team.</div>
        <div className='skills-left-control'>
          <div id ='experience' className= {`skills-left-element ${ActiveElement==='experience' ? 'active' : ''}`} onClick={handleSelect}>Experience</div>
          <div id ='education' className={`skills-left-element ${ActiveElement==='education' ? 'active' : ''}`} onClick={handleSelect}>Education</div>
          <div id ='skills' className={`skills-left-element ${ActiveElement==='skills' ? 'active' : ''}`} onClick={handleSelect}>Skills</div>
        </div>
      </div>
      <div className='skills-right'>
      <div className=''>
      <h1 className='left-header'>My <span className='header-green'>{ActiveElement}</span></h1>
      </div>
            {<Skill element = {ActiveElement} />}
      </div>
    </div>
  )
}
