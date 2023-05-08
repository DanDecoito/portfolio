import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import HeroComponent from './components/hero/HeroComponent';
import AboutComponent from './components/about/AboutComponent';
import SkillsComponent from './components/skills/SkillsComponent';
import BuildsComponent from './components/builds/BuildsComponent';

import gitHub from './assets/github.png'




function App() {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-scroll'>
    <Header />
    <section id='hero' className='snap-center'>
      <HeroComponent />
    </section>
    <section id='about' className='snap-center'>
      <AboutComponent />
    </section>
    <section id='skills' className='snap-start'>
      <SkillsComponent />
    </section>
    <section id='builds' className='snap-start'>
      <BuildsComponent />
    </section>
    
     </div>
  );
}

export default App;
