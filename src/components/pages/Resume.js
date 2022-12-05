import React from 'react';
import andrewResume from '../../assets/Andrew-Massey-Resume.pdf'

export default function Resume(){
    return(
        <div className="container text-center">
            <div className="col">
            <h1>Download my resume below.</h1>
            <a href={andrewResume} download>
                Download my Resume
            </a>
            </div>
            <div className="col">
            <h2>
                Proficiencies
            </h2>
            <p>
            HTML, CSS, JavaScript, React.js, node.js, Git
            </p>
            </div>
        </div>
    )
}