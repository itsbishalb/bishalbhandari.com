import React from "react";
interface SkillCardProps {
    name: string;
    className: string
  }
const SkillCard : React.FC<SkillCardProps> = ({ name,className }) => {
    return(
       <div className={"skill-card"}>
         <i className={className}></i>
         <p>{name}</p>
       </div>
     );
   }
    
const SkillsSection : React.FC = () => {
     return (
       <section id="skills">
       <h1 className="title-text">Skills</h1>
       <div className="skills-list">
       <h2 className="smaller-text">Using Now: </h2>
       <UsingNowSkills />
       <h2 className="smaller-text">Learning: </h2>
       <LearningSkills />
       </div>
       </section>
     )
   }
   
 const UsingNowSkills : React.FC = () => {
     return (
       <div className="using-now skills-grid">
        <SkillCard name="HTML 5" className="devicon-html5-plain colored" />
         <SkillCard name="CSS" className="devicon-css3-plain colored" />
         <SkillCard name="JavaScript" className="devicon-javascript-plain colored" />
         <SkillCard name="React.js" className="devicon-react-original colored" />
         <SkillCard name="MySQL" className="devicon-mysql-plain" />
         <SkillCard name="Node.js" className="devicon-nodejs-plain" />
         <SkillCard name="MongoDB" className="devicon-mongodb-plain" />
         <SkillCard name="C++" className="devicon-cplusplus-plain" />
         <SkillCard name="PHP" className="devicon-php-plain" />
         <SkillCard name="C" className="devicon-c-plain colored" />
         <SkillCard name="Java" className="devicon-java-plain colored" />
         <SkillCard name="Python" className="devicon-python-plain" />
         <SkillCard name="Git" className="devicon-git-plain colored" />
         <SkillCard name="Figma" className="devicon-figma-plain colored" />
         <SkillCard name="Linux" className="devicon-linux-plain" />
         
       </div>
     )
   }
   
const LearningSkills : React.FC = () => {
     return (
       <div className="learning skills-grid">
         <SkillCard name="Docker" className="devicon-docker-plain" />
       </div>
     )
   }

export default SkillsSection;