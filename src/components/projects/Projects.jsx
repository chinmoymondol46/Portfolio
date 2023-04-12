import React from 'react'
import './projects.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.jpg'
import IMG5 from '../../assets/project5.jpg'
import IMG6 from '../../assets/project6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Keyword Density Checker - C#',
    github:'https://github.com/chinmoymondol46/Keyword-Density-Checker-CSharp'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Flower Classification Model - ML',
    github:'https://github.com/chinmoymondol46/Flower-Classification-Model-CNN'
  },  
  {
    id: 3,
    image: IMG3,
    title: 'Online Job Portal - PHP, JS',
    github:'https://github.com/chinmoymondol46/Online-Job-Portal'
  },  
  {
    id: 4,
    image: IMG4,
    title: 'Brick Breaker Game - C++',
    github:'https://github.com/chinmoymondol46/Brick-Breaker-Game-CPP'
  },  
  {
    id: 5,
    image: IMG5,
    title: 'Hospital Management System - C#',
    github:'https://github.com/chinmoymondol46/Hospital-Management-System-CSharp'
  },  
  {
    id: 6,
    image: IMG6,
    title: 'Super Shop Management System - Java',
    github:'https://github.com/chinmoymondol46/Super-Shop-Management-System-Java'
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Works</h5>
      <h2>Personal Projects</h2>

      <div className='container project__container'>
        {
          data.map(({id, image, title, github}) => {
            return(
              <article key={id} className='project__item'>
              <div className='project__item-img'>
                <img src={image} alt={title}/>
              </div>

              <h3>{title}</h3>
              <div className='project__item-cta'>
                <a href={github} className='btn' target='_blank'>GitHub</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects