import Header from "./components/Header"
import Hero from "./components/Hero"
import Skill from "./components/Skills"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Stack from "./components/Stack"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Skill />
        <Portfolio />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
