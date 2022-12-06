import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'


ReactDOM.render(<App />, document.getElementById('root'));


// TODO:WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// TODO:WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address