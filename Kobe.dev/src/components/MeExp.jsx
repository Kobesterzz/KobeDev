import AboutMe from './Aboutme'
import Experience from './experience'


function  MeExp(){

    return(
        <>
        <div className='MeExpBlock'>
            <div className='leftBlock'>
                <AboutMe/>
            </div>

            <div className='rightBlock'>
               <Experience/>
            </div>

        </div>
        
        </>
    )
}

export default MeExp;




