import { useState } from 'react';
import '../css/ComponentsCss/Header.css'
import Epfp from '../img/Epfp.png'
import CrunchyrollLogo from '../img/CrunchyrollLogo.png'
import ProfileModal from './profileModal'

function Header() {

  const[isModalOpen, setisModalOpen] = useState(false);
  const openModal = () => setisModalOpen(true);
  const closeModal = () => setisModalOpen(false);

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
          <a onClick={openModal}>
            <div className='right'>
              <div className="profile-container">
                <div>
                  <img src={Epfp} className='profile-pic'></img>
                  <span className="notification-dot"></span>
                </div>
                <span className='arrow'>&#9662;</span>
              </div>
            </div>
          </a>
        </div>
      </div>


      <ProfileModal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <img src={Epfp} className='profile-pic'></img>
          <div>
            <h1>Kobe Shaw</h1>
            <div>
              <svg
                className="cr-crown"
                viewBox="0 0 24 16"
                width="16"
                height="12"
                aria-hidden="true"
              >
                <path
                  d="M2 14L4.5 4.5 9 8l3-6 3 6 4.5-3.5L22 14H2z"
                  fill="#f58e18ff"
                />
              </svg>
              
              <h2>Premium Member</h2>
            </div>
          </div>
        </div>
      </ProfileModal>
    </>
  )
}

export default Header