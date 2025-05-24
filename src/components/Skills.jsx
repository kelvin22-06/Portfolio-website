import "../styles/Skills.css"

function Skills() {
  const skills = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 12C17.373 12 12 17.373 12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24C36 17.373 30.627 12 24 12ZM24 33C19.029 33 15 28.971 15 24C15 19.029 19.029 15 24 15C28.971 15 33 19.029 33 24C33 28.971 28.971 33 24 33Z"
            fill="#2A9D8F"
          />
          <path
            d="M24 18C21.791 18 20 19.791 20 22C20 24.209 21.791 26 24 26C26.209 26 28 24.209 28 22C28 19.791 26.209 18 24 18Z"
            fill="#2A9D8F"
          />
          <path d="M24 28C20.686 28 18 30.686 18 34H30C30 30.686 27.314 28 24 28Z" fill="#2A9D8F" />
        </svg>
      ),
      title: "Front-End",
      description:
        "I specialize in crafting fast, responsive, and interactive user interfaces using modern technology like React. With a focus on clean code and seamless user experiences, I ensure websites are visually appealing, performant, and accessible across all devices.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M36 16H12C10.895 16 10 16.895 10 18V30C10 31.105 10.895 32 12 32H36C37.105 32 38 31.105 38 30V18C38 16.895 37.105 16 36 16Z"
            stroke="#2A9D8F"
            strokeWidth="2"
          />
          <path d="M16 24H20" stroke="#2A9D8F" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 24H28" stroke="#2A9D8F" strokeWidth="2" strokeLinecap="round" />
          <path d="M32 24H32.01" stroke="#2A9D8F" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: "Web-Developement",
      description:
        "From dynamic web applications to robust e-commerce platforms, I build scalable and secure solutions tailored to business needs. Using JavaScript, HTML5, CSS3, Framework (REACT), I deliver fully functional web with optimized performance and intuitive navigation.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12L12 18V30L24 36L36 30V18L24 12Z" stroke="#2A9D8F" strokeWidth="2" strokeLinejoin="round" />
          <path d="M24 24L12 18" stroke="#2A9D8F" strokeWidth="2" />
          <path d="M24 24V36" stroke="#2A9D8F" strokeWidth="2" />
          <path d="M24 24L36 18" stroke="#2A9D8F" strokeWidth="2" />
        </svg>
      ),
      title: "Web-Design",
      description:
        "I combine aesthetics and usability to create visually stunning websites that engage users. Through thoughtful UI/UX design, wireframing, and prototyping, I transform ideas into pixel-perfect, brand-aligned digital experiences that drive conversions and user satisfaction.",
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-subtitle"></p>
        <h2 className="section-title">My Expertise____</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
