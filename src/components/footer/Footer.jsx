import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>CMONDOL</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/chinmoymondol46" target='_blank'><FaFacebookF/></a>
        <a href="https://www.instagram.com/chinmoy.mondol.cm" target='_blank'><FiInstagram/></a>
        <a href="https://twitter.com/chinmoymondol46" target='_blank'><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; CMONDOL. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer