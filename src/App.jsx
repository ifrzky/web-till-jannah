import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import PrayerTimes from './modul/PrayerTimes'
import ZakatCalc from './components/ZakatCalc'

const App = () => {
  return (
    <>
      <div className='App px-5 py-5'>
        <Navbar />
      </div>
      <div className='__wrappper justify-center items-center min-h-screen'>
        <Hero />
        <section className='home'></section>
        <section className='alquran'>
          {/* <Quran /> */}
        </section>
        <section className='prayertime px-10 py-10 flex flex-row'>
          <ZakatCalc />
          <PrayerTimes />
        </section>
        <section className='__article flex flex-wrap px-10 py-10 gap-5 justify-center items-center'>
          <Card />
        </section>
        <section className='zakatcalc'></section>
        <section className='kalenderhijriah'></section>
        <section className='about'></section>
        <Footer />
      </div>
    </>
  )
}

export default App
