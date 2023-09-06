import React from "react"
const AboutSection : React.FC = () => {
    return (
        <section id="projects">
        <h1 className="title-text">Portfolio</h1>
        <div className="projects-choice">
            {/* <button title="All" className="project-btn" id="one">All</button>
            <button title="Web Tools" className="project-btn" id="two">Web Tools</button>
            <button title="All" className="project-btn" id="three">Others</button> */}
            <div className="underline"></div>
        </div>

        <div className="projects-list" id="projects-list">  
            
        </div>
        <p className="smaller-text"><a className="url" href="https://projects.bishalbhandari.com/">Click here to check more project</a></p>
    </section>
    )
  }
  
    export default AboutSection;