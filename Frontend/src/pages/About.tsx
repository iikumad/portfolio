import React from 'react'
import Card from '../components/Card'
import dentist_icon from '../assets/dentist.png'
import web_icon from '../assets/programmer.png'
import ambitious_icon from '../assets/self.png'

export default function About() {
  const dentist_about = "As a dental student, I’m passionate about mastering the latest dental techniques and providing compassionate care. I focus on developing strong clinical skills and building a solid foundation in oral health to make a positive impact on patients’ smiles and well-being."
  const web_dev_about = "I’m a web developer focused on creating responsive, user-friendly websites and applications. With expertise in both front-end and back-end technologies, I’m dedicated to solving complex problems and delivering high-quality digital solutions."
  const ambitious_about = "I’m an ambitious individual driven by a passion for growth and success. I constantly seek challenges to push my limits and strive for excellence, always learning from experiences to achieve my goals and reach new heights."
  const web = "Web developer"
  const dentist_title = "Dental Student"
  const ambitious_title = "Ambitious"
  return (
    <div className='about'>
    <h1 className='about-title'>Who I am</h1>
    <div className='about-container'>
      <Card 
      icon={web_icon}
      title={web}
      content={web_dev_about}
      />
      <Card
      icon={dentist_icon}
      title={dentist_title}
      content={dentist_about}
      />
      <Card
      icon={ambitious_icon}
      title={ambitious_title}
      content={ambitious_about}
      />
    </div>
    </div>
  )
}
