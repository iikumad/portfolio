import React, { useEffect, useState } from 'react'
import html from '../assets/html.png'

export default function SkillDisplay() {
  const [Skills,SetSkills] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/skills/")
        const json = await response.json()
        console.log({json})
        SetSkills(json)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
      fetchData()
    },[])
  
  return (
    <div className='skill-left-container skill-elements-container'>
        {Skills && Skills.map((skill) => (
        <div className='skill-card tec-card' >
          <img src={skill.icon} className='skill-card-icon'/>
          <div className="comment">
            {skill.title}
          </div>
        </div>
        ))}
    </div>
    
  )
}
