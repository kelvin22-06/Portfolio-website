import "../styles/About.css"
import Cv from "../assets/Resume.pdf"


function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-image-container">
          <div className="about-image">
            <img src="/background.png" alt="Kelvin - Front End Developer" />
          </div>
        </div>
        <div className="about-content">
          <p className="section-subtitle"></p>
          <h2 className="section-title">About Me____</h2>
          <div className="about-text">
            <p>
            A passionate self-taught developer with a knack for crafting user-centric websites, currently pursuing an Advanced Diploma in Software Engineering (ADSE) at Aptech Computer Education. Based in Festac, Lagos, Nigeria, I combine formal training with independent learning to build responsive, accessible, and visually engaging web experiences. Driven to refine my skills and contribute to meaningful projects while advancing toward my diploma.</p>
            <p></p>
            <a download="" href={Cv} className="cv-button">
            Download CV
          </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
