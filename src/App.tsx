import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import { BackgroundEffects } from './components/layout/BackgroundEffects'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Education } from './components/sections/Education'
import { GitHubStats } from './components/sections/GitHubStats'
import { Support } from './components/sections/Support'
import { Contact } from './components/sections/Contact'

export default function App() {
  useRevealOnScroll()

  return (
    <div className="relative min-h-screen overflow-x-clip bg-bg">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <GitHubStats />
        <Support />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
