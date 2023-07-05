import Approach from "./assets/components/Approach"
import Carousel from "./assets/components/Carousel"
import Footer from "./assets/components/Footer"
import Hero from "./assets/components/Hero"
import NavBar from "./assets/components/NavBar"
import Strategic from "./assets/components/Strategic"






function App() {


  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>
        <Hero />
      </header>
      <main>
      <Strategic />
      <Approach />
      <Carousel />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
