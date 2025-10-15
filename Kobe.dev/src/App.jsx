import Header from './components/Header'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import RecentlyWatched from "./components/recentlyWatched"
import Top5 from "./components/top5"
import './css/App.css'

function App() {

  return (
    <>
      <Header/>
      <Projects/>
      <RecentlyWatched/>
      <Top5/>
      <AboutMe/>
    </>
  )
}

export default App
