import React, { useEffect, useState } from 'react'


export default function EducationDisplay() {
  const[Education,SetExperiences] = useState([])

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/educations/")
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
      {Education && Education.map((education) => (
          <div className='skill-card' key={education.id} >
          <p className='skill-card-date'>{education.date}</p>
          <h1 className='skill-card-title'>{education.title}</h1>
          <p className='skill-card-type'><div className='circle'></div>{education.type}</p>
          <p className='skill-card-desc'>{education.description}</p>
        </div>
        ))}
    </div>
  )
}
