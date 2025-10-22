import MeIMG from '../img/MeIMG.jpeg'
import '../css/ComponentsCss/AboutMe.css'

function AboutMe() {
  return (
    <div className='aboutMe'>
      <div className="card dark">
        <img src={MeIMG} alt="Kobe Shaw" />
        <section>
          <h2>Kobe Shaw</h2>
          <p>Student with startup experience, skilled in problem-solving and teamwork.</p>

            <div className="social-icons">
                <a href="https://x.com/yourhandle" target="_blank">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" />
                </a>
                <a href="https://github.com/yourhandle" target="_blank">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" />
                </a>
                <a href="https://linkedin.com/in/yourhandle" target="_blank">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" />
                </a>
            </div>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;