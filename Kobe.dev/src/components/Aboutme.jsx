import MeIMG from '../img/MeIMG.jpeg'

function AboutMe(){

    return(
        <div className='aboutMe'>
            <div className='column1'>
                <img src={MeIMG} className='MeIMG'></img>
                <span class="notification-dot"></span>
            </div>
            <div className='column2'>
                <h1 className='Name' >Kobe Shaw</h1>
                <h1 className='title' >Computer Science Student UT Arlignton | SWE</h1>
            </div>
        </div>
    );
}

export default AboutMe;