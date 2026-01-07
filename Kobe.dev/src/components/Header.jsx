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
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#anime">Anime</a>
                <a href="#modeling">Modeling</a>
              </div>
          </div>
          <div className='right'>
            <div className="profile-container">
              <div>
                <img src={Epfp} className='profile-pic'></img>
                <span className="notification-dot"></span>
              </div>
              <span className='arrow'>&#9662;</span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header