import Header from './components/Header'
import Projects from './components/Projects'
import MeExp from './components/MeExp'
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
        
        <div className='headings'>
          <div className="titleSectionleft">
            <h2 className="experience-title">About Me</h2>
            <hr className="line" />
          </div>
          <div className="titleSectionright">
            <h2 className="experience-title">Experience</h2>
            <hr className="line" />
          </div>
        </div>

        <MeExp/>
        <RecentlyWatched/>
        {/*<Top5/>*/}
        <ModelingPhoto/>

      </div>
      
    </>
  )
}

export default App
