import React from 'react';
import Andrew from "../../assets/andrew.jpg"
import '../../styles/About.css'

export default function About(){
    return(
        <div>
            {/* about me */}
            <h1>About Andrew</h1>
            {/* paragraph about myself */}
            <img className="myPicture" src={Andrew} alt="Andrew"/>
            <p>
                random stuff Here
            </p>
        </div>
    )
}