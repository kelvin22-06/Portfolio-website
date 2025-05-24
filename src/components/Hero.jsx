import "../styles/Hero.css"

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hey, I'm Kelvin a</p>
          <h1 className="hero-title">
            Front-End
            <br />
            Developer
          </h1>
          <p className="hero-description">
          with a big creative
mind, who loves the idea of creating amazing things.
            <br />
            If that
sounds cool hit me up!
          </p>
          <a href="#contact" className="hero-button">
            Get In Touch
            </a>
        </div>
        <div className="hero-image-container">
          <div className="hero-image">
            <img src="/my.png" alt="Kelvin - Front End Developer" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
