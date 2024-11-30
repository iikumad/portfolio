import React from 'react'

interface CardProbs{
  icon : string
  title : string
  content : string
}

export default function Card({icon,title,content}:CardProbs) {
  return (
    <div className='card'>
        <img className='card-icon' src={icon}></img>
        <h2 className='card-title'>{title}</h2>
        <p className='card-content'>{content}</p>
    </div>
  )
}
