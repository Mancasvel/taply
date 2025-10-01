import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import PreRegister from '@/components/PreRegister'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-taply-dark">
      <Hero />
      <Benefits />
      <HowItWorks />
      <PreRegister />
      <Footer />
    </main>
  )
}

