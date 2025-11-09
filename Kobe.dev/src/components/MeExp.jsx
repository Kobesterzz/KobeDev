import AboutMe from './Aboutme'
import Experience from './experience'
import '../css/ComponentsCss/meExp.css'


function MeExp(){

    return(
        <>
        <div className='MeExpBlock'>
            <div className='rightBlock'>
               <Experience/>
            </div>

        </div>
        
        </>
    )
}

export default MeExp;




