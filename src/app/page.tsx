import { About } from './components/About'
import { Contact } from './components/Contact'
import { Galery } from './components/Galery'
import { Hero } from './components/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Galery />
      <Contact />
    </main>
  )
}
