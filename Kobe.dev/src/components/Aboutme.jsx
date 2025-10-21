import MeIMG from '../img/MeIMG.jpeg'
import '../css/ComponentsCss/AboutMe.css'

function AboutMe(){

    return(
        <div className='aboutMe'>
            <div className='column1'>
                
                <h1 className='Name' >Kobe Shaw</h1>
                <h1 className='title' >Computer Science Student UT Arlignton | SWE</h1>
                <div className='aboutmeHeaders'>
                    <div>
                        <li>
                            Start Up swe Intern
                        </li>
                        <li>
                            Tech Enthusiast
                        </li>
                    </div>
                    <div>
                        <li>
                            Computer Science Student
                        </li>
                        <li>
                            Problem Solver
                        </li>
                    </div>

                </div>

            </div>
            <div className='column2'>
                <img src={MeIMG} className='MeIMG'></img>
                <span class="notification-dot"></span>
            </div>
        </div>
    );
}

export default AboutMe;