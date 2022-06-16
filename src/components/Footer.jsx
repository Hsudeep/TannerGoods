import React from 'react'
import { Link } from 'react-router-dom'
import style from "./footer.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <div className={style.footercss}>
        <div>
            <h3>TANNER GOODS</h3>
            <p>In a world where we are overwhelmed by products made to break down or go out style,
            we aim to go against that grain.</p>
            <Link to="/about">About us</Link>
        </div>
        <div>
          <h3>Support us</h3>
          <FacebookIcon></FacebookIcon>
          <InstagramIcon></InstagramIcon>
          <TwitterIcon></TwitterIcon>
          <br />
          <Link to="/contact">Contact Us</Link>
        </div>
        <div>
          <h3>Faq</h3>
          <Link to="/faq">FAQ</Link>
          
        </div>
        <div>
          <h3>Stay in loop with us</h3>
          <p>Subscribe to receive exclusive offers and be the first to know of new product releases.</p>
        </div>
    </div>
  )
}

export default Footer