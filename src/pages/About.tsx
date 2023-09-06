import React from "react"
// @ts-ignore
import bishalImage from '../images/bishalbhandari.jpg'
export const AboutSection : React.FC = () => {
    return (
    <section id="home">
      <h1 className="title-text">About Me</h1>
      <div className="about-info">
        <p className="desc-text">
        I am Bishal Bhandari, 2nd year computer science student at University of Nottingham. I am experienced in front end development and currently learning node.js and mongoDB to improve my backend skills.
        In my free time i like cooking and playing badmintion. I enjoy learning new things and i make use of online resources like freecodecamp to learn new skills. I would like to go in field of cyber secutity 
        after my graduation.
        </p>
        <img src={bishalImage} className="bishalImg" alt="Bishal Bhandari"/>
      </div>
    </section>
    )
  }
  
  