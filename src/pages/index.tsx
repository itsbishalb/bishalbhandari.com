import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/global.css"
import 'font-awesome/css/font-awesome.min.css';
import 'devicon'

import { SkillsSection } from "./Skills";
import { AboutSection } from "./About";
import { HeroSection } from "./Hero";
import { ContactSection } from "./Contact";


export const NavMenu: React.FC = () => {
  return (  
    <nav className="navbar">
      <a className="url" href="#home">#Home</a>
      <a className="url" href="#about">#About</a>
      <a className="url" href="#projects">#Projects</a>
      <a className="url" href="#contact">#Contact</a>
  </nav>
);
}


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="container" >
    <NavMenu />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ContactSection />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Bishal Bhandari</title>





