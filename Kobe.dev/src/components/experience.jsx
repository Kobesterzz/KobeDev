import React from "react";
import '../css/ComponentsCss/experience.css'

function  Experience() {

    const expBlock = [
        {
            title: 'Computer Science Student' ,
            subtitle: 'Bachalors' , 
            date: 'Aug 2024 - May 2028', 
            description: 'Building a strong foundation in software development, algorithms, and web technologies through coursework and projects.' ,
            KeyTools: ['C', 'Python', 'Git'],
        },
        {
            title: 'Start Up Intern',
            subtitle: 'SWE Intern at AfterFlea' , 
            date: 'Nov 2023 - Apr 2024', 
            description: 'Contributed to front-end development using React and Node.js, improving UI performance and assisting with feature design.',
            KeyTools: ['React', 'Git', 'Figma'],
        },
        {
            title: 'NuCamp' ,
            subtitle: 'FrontEnd & Mobile DevelopMent Bootcamp' , 
            date: 'Jan 2022 - Dec 2022', 
            description: 'Completed hands-on training in React, JavaScript, and mobile app development through real-world coding projects.' ,
            KeyTools: ['React', 'JavaScript', 'CSS'],

        }
    ];

    return (
    <>
      

      <div className='roadMap'>
        {expBlock.map((item, index) => (
          <div key={index} className="block">
            <div className='blockContent'>
              <div className="leftexpBlock">
                <h1 className="blockTitle">{item.title}</h1>
                <h2 className="SubTitle">{item.subtitle}</h2>
                <h2 className="description">{item.description}</h2>

                {/* map through KeyTools */}
                <div className="keyTools">
                  {item.KeyTools.map((tool, idx) => (
                    <span key={idx} className="toolTag">{tool}</span>
                  ))}
                </div>
              </div>

              <div className='rightexpBlock'>
                <h2 className="blockDate">{item.date}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
    
}

export default Experience;
