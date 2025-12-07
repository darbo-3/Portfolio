import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import LiquidEther from './LiquidEther';

const App = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col bg-slate-950 relative overflow-x-hidden'>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20} // Reduced from 20
          cursorSize={50} // Reduced from 100
          isViscous={false}
          viscous={15} // Reduced from 30
          iterationsViscous={15} // Reduced from 32
          iterationsPoisson={15} // Reduced from 32
          resolution={0.3} // Reduced from 0.5 (biggest impact)
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.3} // Reduced from 0.5
          autoIntensity={1.5} // Reduced from 2.2
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div style={{ position: '', zIndex: 10 }}>
        <Navbar /> 
        <main className='w-full'>
          <Home />
          {/* <About /> */}
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;