import React from "react"

export const ContactSection : React.FC = () => {
    return (
        <section id="contact">
        <div className="form-section">
             <h1 className="title-text">Contact</h1>
             <form action="https://formspree.io/f/mwkyvbkp" method="POST" className="contact-form">
                 <input className="text-input" type="text" name="name" placeholder="Name" required/>
                 <input className="text-input" type="email" placeholder="Email" name="email" required/>
                 <input className="text-input" type="text" name="subject" placeholder="Subject" required/>
                 <textarea className="text-input" title="message Box" name="message" placeholder="Message" required></textarea>
                 <div className="form-buttons">
                     <input id="submit-btn" type="submit" name="submit" value="Send Message" />
                     <div id="form-social" className="social-links">
                         <a href="https://github.com/itsbishalb" className="fa fa-github" title="github"></a>
                         <a href="https://www.linkedin.com/in/itsbishalb/" className="fa fa-linkedin" title="linkedin"></a>
                         <a href="https://www.facebook.com/itsbishalb" className="fa fa-facebook" title="facebook"></a>
                         <a href="https://www.twitter.com/itsbishalb" className="fa fa-twitter" title="twitter"></a>
                         <a href="https://www.instagram.com/itsbishalb/" className="fa fa-instagram" title="instagram"></a>
                     </div>
                 </div>               
             </form>
            
         </div>
     </section>
    )
  }