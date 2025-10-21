import '../css/ComponentsCss/Header.css'
import Epfp from '../img/Epfp.png'
import CrunchyrollLogo from '../img/CrunchyrollLogo.png'

function Header() {

  return (
    <>
      <div className="header">
        <div className='spacing'>
          <div className='left'>
              <div className='logoArea'><img className='logo' src={CrunchyrollLogo}/><h1>Kobe</h1></div>
              <div className='list'>
                <a>Projects</a>
                <a>About Me</a>
                <a>Experience</a>
                <a>More</a>
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