import { About } from './components/About'
import { Galery } from './components/Galery'
import { Hero } from './components/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Galery />
    </main>
  )
}
