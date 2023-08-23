import { About } from '../About'
import { Contact } from '../Contact'
import { Galery } from '../Galery'
import { Hero } from './components/Hero'

export function Home() {
  return (
    <main>
      <Hero />
      <About className="bg-dark" />
      <Galery />
      <Contact />
    </main>
  )
}
