import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./footer.css"

const handleClick = () => {
  window.location.replace('https://github.com/ametonour1/My-projects');
}; 

const handleClickLi = () => {
  window.location.replace('https://www.linkedin.com/in/onour-amet-7208b6252');
}; 
export const Footer = () => {
  return (
    <div className='footer__main'>
      <div className='footer__social'>
      <button onClick={handleClick}><GitHubIcon fontSize='large'/></button>
      <button onClick={handleClickLi}><LinkedInIcon fontSize='large'/></button>
      </div>
      <p>&#169;Amet Onour 2023</p>
    </div>
  )
}


