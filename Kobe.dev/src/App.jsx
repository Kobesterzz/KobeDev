import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Projects from './components/Projects'
import MeExp from './components/MeExp'
import Experience from './components/experience'
import RecentlyWatched from "./components/recentlyWatched"
import Top5 from "./components/top5"
import ModelingPhoto from "./components/modelingAndPhoto"
import './css/App.css'

function App() {

  return (
    <>
      <Header/>
      <section id="projects"><Projects/></section>

      <div className='contentPadding'>
        <section id="experience"><Experience/></section>

        <section id="anime">
          <RecentlyWatched/>
          <Top5/>
        </section>

        <section id="modeling"><ModelingPhoto/></section>

      </div>
      
    </>
  )
}

export default App