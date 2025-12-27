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
      <Header />
      <Routes>
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/anime" element={<h1>Anime</h1>} />
        <Route path="/modeling" element={<h1>Modeling</h1>} />
      </Routes>
    </>
  )
}

export default App
