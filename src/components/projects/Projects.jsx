import React from 'react'
import './projects.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.jpg'
import IMG5 from '../../assets/project5.jpg'
import IMG6 from '../../assets/project6.jpg'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Works</h5>
      <h2>Personal Projects</h2>

      <div className='container project__container'>
        <article className='project__item'>
          <div className='project__item-img'>
            <img src={IMG1} alt="Keyword Density Checker - C#"/>
          </div>

          <h3>Keyword Density Checker - C#</h3>
          <div className='project__item-cta'>
            <a href="https://github.com/chinmoymondol46/Keyword-Density-Checker-CSharp" className='btn' target='_blank'>GitHub</a>
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-img'>
            <img src={IMG2} alt="Flower Classification Model - ML"/>
          </div>

          <h3>Flower Classification Model - ML</h3>
          <div className='project__item-cta'>
            <a href="https://github.com/chinmoymondol46/Flower-Classification-Model-CNN" className='btn' target='_blank'>GitHub</a>
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-img'>
            <img src={IMG3} alt="Online Job Portal - PHP, JS"/>
          </div>

          <h3>Online Job Portal - PHP, JS</h3>
          <div className='project__item-cta'>
            <a href="https://github.com/chinmoymondol46/Online-Job-Portal" className='btn' target='_blank'>GitHub</a>
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-img'>
            <img src={IMG4} alt="Brick Breaker Game - C++"/>
          </div>

          <h3>Brick Breaker Game - C++</h3>
          <div className='project__item-cta'>
            <a href="https://github.com/chinmoymondol46/Brick-Breaker-Game-CPP" className='btn' target='_blank'>GitHub</a>
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-img'>
            <img src={IMG5} alt="Hospital Management System - C#"/>
          </div>

          <h3>Hospital Management System - C#</h3>
          <div className='project__item-cta'>
            <a href="https://github.com/chinmoymondol46/Hospital-Management-System-CSharp" className='btn' target='_blank'>GitHub</a>
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-img'>
            <img src={IMG6} alt="Super Shop Management System - Java"/>
          </div>

          <h3>Super Shop Management System - Java</h3>
          <div className='project__item-cta'>
            <a href="https://github.com/chinmoymondol46/Super-Shop-Management-System-Java" className='btn' target='_blank'>GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects