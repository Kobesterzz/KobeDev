import React from "react";
import '../css/ComponentsCss/experience.css'

function  Experience() {

    const expBlock = [
        {
            title: 'Computer Science Student' ,
            subtitle: 'Bachalors' , 
            date: 'Aug 2024 - May 2028', 
            description: '.......' ,
        },
        {
            title: 'Start Up Intern',
            subtitle: 'SWE Intern at AfterFlea' , 
            date: 'Nov 2023 - Apr 2024', 
            description: '....',
        },
        {
            title: 'NuCamp' ,
            subtitle: 'FrontEnd & Mobile DevelopMent Bootcamp' , 
            date: 'Jan 2022 - Dec 2022', 
            description: '.......' ,
        }
    ]

    return(
        <>
        <div className="titleSection">
          <h2 className="experience-title">My Top 5</h2>
          <hr />
        </div>
        <div>
            {expBlock.map((item, index) => (
            <div key={index} className="block">
                <div className='blockContent'>
                    <div className="TopBlock">
                        <h1 className="blockTitle">{item.title}</h1>
                        <h2 className="blockDate">{item.date}</h2>
                    </div>
                    <div className = 'bottomBlock'>
                        <h2 className="SubTitle">{item.subtitle}</h2>
                        <h2 className="description">{item.description}</h2>
                    </div>
                </div>
            </div>
          ))}
        </div>
        </>
    )
    
}

export default Experience;
