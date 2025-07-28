// import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Spirit from './components/Spirit';
import Team from './components/Team';
import GetInvolved from './components/GetInvolved';
import Events from './components/Events';
// import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Spirit />
      <Team />
      <GetInvolved />
      <Events />
      {/* <Partners /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;