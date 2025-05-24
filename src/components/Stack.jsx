import "../styles/Stack.css"

function Stack() {
  const projects = [
    {
      image: "/html.png",
      title: "HTML",
    },
     {
       image: "/css.png",
       title: "CSS",
     },
     {
     image: "/js.png",
      title: "JAVASCRIPT",
     },
     {
     image: "/react.png",
      title: "REACT",
     },
  ]

  return (
    <section id="stack" className="stack">
      <div className="container">
        <div className="stack-header">
          <div>
            <p className="section-subtitle"></p>
            <h2 className="section-title">Tech Stack____</h2>
          </div>
        </div>

        <div className="stack-grid">
          {projects.map((stack, index) => (
            <div className="stack-card" key={index}>
              <div className="stack-image">
                <img src={stack.image || "/placeholder.svg"} alt={stack.title} />
              </div>
              <div className="stack-info">
                <h3 className="stack-title">{stack.title}</h3>
                <p className="stack-description">{stack.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack
