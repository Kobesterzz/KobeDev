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
      <Projects/>

      <div className='contentPadding'>
        <RecentlyWatched/>
        <Top5/>
        <Experience/>
        <ModelingPhoto/>
      </div>
      
    </>
  )
}

export default App
