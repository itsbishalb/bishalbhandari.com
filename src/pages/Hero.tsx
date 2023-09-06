import React from "react"

export const HeroSection : React.FC = () => {
    return (
      <section id="home">
      <p className="smaller-text" id="hellotext">Hello,</p>
      <h3 className="big-text">I'm Bishal Bhandari</h3>
      <p className="smaller-text">Computer Science Student & Full Stack Developer</p>
      <div className="social-links">
          <a href="https://github.com/itsbishalb" className="fa fa-github" title="github"></a>
          <a href="https://www.linkedin.com/in/itsbishalb/" className="fa fa-linkedin" title="linkedin"></a>
          <a href="https://www.facebook.com/itsbishalb" className="fa fa-facebook" title="facebook"></a>
          <a href="https://www.twitter.com/itsbishalb" className="fa fa-twitter" title="twitter"></a>
          <a href="https://www.instagram.com/itsbishalb/" className="fa fa-instagram" title="instagram"></a>
      </div>
  </section>
    )
  }