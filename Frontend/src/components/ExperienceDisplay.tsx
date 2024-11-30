import React, { useEffect, useState } from 'react'

export default function ExperienceDisplay() {
  const[Experiences,SetExperiences] = useState([])

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/experiences/")
      const json = await response.json()
      console.log({json})
      SetExperiences(json)
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
    fetchData()
  },[])

  return (
    <div className='skill-left-container'>
      {Experiences && Experiences.map((experience) => (
        <div className='skill-card' key={experience.id} >
          <p className='skill-card-date'>{experience.date}</p>
          <h1 className='skill-card-title'>{experience.title}</h1>
          <p className='skill-card-type'><div className='circle'></div>{experience.type}</p>
          <p className='skill-card-desc'>{experience.description}</p>
        </div>
        ))}
    </div>
  )
}
