import React from 'react'
import SkillDisplay from './SkillDisplay'
import ExperienceDisplay from './ExperienceDisplay'
import EducationDisplay from './EducationDisplay'

interface SkillProbs
{
  element: string
}

export default function Skills({element}:SkillProbs) {
  switch(element){
    case 'skill':
      return(
        <SkillDisplay/>
      )
    case 'education':
      return(
        <EducationDisplay/>
      )
    case 'experience':
      return(
        <ExperienceDisplay/>
      )
    default: 
    return  <SkillDisplay/>
}
}
