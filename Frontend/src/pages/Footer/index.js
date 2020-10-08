import React from 'react'
import './footer.css'
import * as FaIcons from "react-icons/fa";

function Footer() {

  const Year = () => {
    return new Date().getFullYear();
  }

  return (
    <footer className="app-footer">
      <span className="app-footer__date">{Year()} ©</span>
      <a href="https://www.linkedin.com/in/douggoncalvesdev/" target="_blank" rel="noopener noreferrer" className="social"><FaIcons.FaLinkedin/></a>
      <a href="https://github.com/DougGoncalves" target="_blank" rel="noopener noreferrer" className="social"><FaIcons.FaGithub/></a>
      <a href="https://api.whatsapp.com/send?phone=5511976682812" target="_blank" rel="noopener noreferrer" className="social"><FaIcons.FaWhatsapp/></a>
      <span className="app-footer__message">
        Desenvolvido por Doug Gonçalves
      </span>
    </footer>
  )
}

export default Footer
