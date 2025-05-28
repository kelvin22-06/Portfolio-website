import "../styles/Portfolio.css"

function Portfolio() {
  const projects = [
    {
      image: "/kdbank.png",
      title: "KDBank",
      description: "KD Bank is a bank web app that emphasizes good and flexible card payments.", 
      demoLink: "https://kd-bank.vercel.app/"        
    },
     {
       image: "/avenir.png",
       title: "Avenir AI",
      description: "Avenir is an AI tech startup that hopes to one day put themselves as a pioneer in AI development.",
      demoLink: "https://avenir-ai-cx71.vercel.app/#about"
     },
     {
     image: "/nobkel.png",
      title: "NobKel Restaurant",
     description: "NobKel is a high end restaurant that has deep roots in asian cooking. They mesh the diversity of asian cuisine with more contemporary dishes to give a unique blend of the best of both worlds.",
     demoLink: "https://nob-kel-u2ec.vercel.app/"
     },
  ]
  

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <div>
            <p className="section-subtitle"></p>
            <h2 className="section-title">Recent Projects____</h2>
          </div>
          <a href="https://github.com/kelvin22-06" className="github-button" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                fill="currentColor"
              />
              <path
                d="M12 7C9.239 7 7 9.239 7 12C7 14.761 9.239 17 12 17C14.761 17 17 14.761 17 12C17 9.239 14.761 7 12 7Z"
                fill="white"
              />
            </svg>
            Visit My GitHub
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            <button>Live Demo</button>
            </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
