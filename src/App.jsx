import Snowfall from 'react-snowfall';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import LiquidEther from './LiquidEther';
import SplashCursor from './component/SplashCursor';

const App = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col bg-slate-950 relative overflow-x-hidden'>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <SplashCursor 
        
        />
      </div>
      <div style={{ position: '', zIndex: 10 }}>
        <Navbar /> 
        <main className='w-full'>
          <Snowfall/>
          <Home />
          <Services />
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