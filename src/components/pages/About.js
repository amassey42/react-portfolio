import React from 'react';
import Andrew from "../../assets/andrew.jpg"
import '../../styles/About.css'

export default function About(){
    return(
        <div>
            {/* about me */}
            <h1>About Me</h1>
            {/* paragraph about myself */}
            <img className="myPicture" src={Andrew} alt="Andrew"/>
            <p>
                Hello, I am Andrew. I am a recent graduate from the Univesity of Washington Fullstack Web development bootcamp. I am excited to begin my journey as a web developer!
            </p>
            <p>
                Before beginning my web development journey I worked in retail with my most current job a Cashier at Costco.
            </p>
        </div>
    )
}