import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1.5+ Years as QA</small>
            </article>

            <article className='about__card'>
              <FaUserGraduate className='about__icon' />
              <h5>Education</h5>
              <small>BSc in CSE</small>
            </article>

          </div>
          <p>
            Hi, I'm Chinmoy Mondol, a Software Quality Assurance Engineer from Bangladesh with 1.5+ years of experience in the field. I have completed my bachelor's in Computer Science & Engineering with a gold medal (Summa Cum Laude) from American International University-Bangladesh. My strong foundation in testing methodologies and tools, combined with an analytical mindset and keen eye for detail, enables me to ensure the quality of software products. I am currently employed as a Software Engineer (QA) at TigerIT Bangladesh Limited, where I am dedicated to providing the best possible service to clients.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About