import '../css/ComponentsCss/Header.css'
import { Link } from 'react-router-dom'
import Epfp from '../img/Epfp.png'
import CrunchyrollLogo from '../img/CrunchyrollLogo.png'

function Header() {

  return (
    <>
      <div className="header">
        <div className='spacing'>
          <div className='left'>
              <div className='logoArea'><img className='logo' src={CrunchyrollLogo}/><h1>Kobe</h1></div>
              <div className="list">
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/anime">Anime</Link>
                <Link to="/modeling">Modeling</Link>
              </div>
          </div>
          <div className='right'>
            <div class="profile-container">
              <img src={Epfp} className='profile-pic'></img>
              <span class="notification-dot"></span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header