import { ContactForm } from './components/ContactForm'
import { ContactGroupButton } from './components/ContactGroupButton'

export function Contact() {
  return (
    <section className="h-screen w-full p-8">
      <div className="container mx-auto">
        <ContactForm />
        <p className="text-center mt-4">Ou</p>
        <ContactGroupButton />
      </div>
    </section>
  )
}
