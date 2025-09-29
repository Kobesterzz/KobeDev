import '../css/Components.css'

function Header() {

  return (
    <>
      <div className="header">
        <div className='spacing'>
          <div className='left'>
              <div className='logoArea'><h1>Kobe.DEV</h1></div>
              <div className='list'>
                <a>Projects</a>
                <a>About Me</a>
                <a>Experience</a>
                <a>More</a>
              </div>
          </div>
          <div className='right'>
            <img></img>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header