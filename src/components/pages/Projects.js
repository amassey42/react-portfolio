// Maps out projects to display on portfolio page.
import react from 'react';
import gameHoard from '../../assets/trade_wizard.PNG'
import workDay from '../../assets/work-day.PNG'
import notetaker from '../../assets/notetaker.PNG'
import quiz from '../../assets/quiz.PNG'
import weather from '../../assets/weather.PNG'
import techblog from '../../assets/techblog.PNG'


const projects = [
    {
        image: gameHoard,
        projectName: "Card Broker",
        description: "Card broker is an app to compare your Magic the Gathering trades.",
        deployedLink: "https://sullisters.github.io/card-broker/",
        gitHub: "https://github.com/Sullisters/card-broker"
    },
    {
        image: workDay,
        projectName: "Work Day Scheduler",
        description: "The Work day Scheduler is an app to put down notes and schedule your work day.",
        deployedLink: "https://amassey42.github.io/work-day-scheduler/",
        gitHub: "https://github.com/amassey42/work-day-scheduler"
    },
    {
        image: notetaker,
        projectName: "Notetaker",
        description: "The notetaker app is to have a place to put down notes.",
        deployedLink: "https://note-take-andrew.herokuapp.com/",
        gitHub: "https://github.com/amassey42/note-taker"
    },
    {
        image: quiz,
        projectName: "Planet Quiz",
        description: "This app is a planet quiz.",
        deployedLink: "https://amassey42.github.io/quiz/",
        gitHub: "https://github.com/amassey42/quiz"
    },
    {
        image: weather,
        projectName: "Weather Dashbaord",
        description: "This app is a weather dashbaord.",
        deployedLink: "https://amassey42.github.io/weather-dashboard/",
        gitHub: "https://github.com/amassey42/weather-dashboard"
    },
    {
        image: techblog,
        projectName: "TechBlog",
        description: "This app is a TechBlog.",
        deployedLink: "https://andrewmasseytechblog.herokuapp.com/",
        gitHub: "https://github.com/amassey42/tech-blog"
    },
];


