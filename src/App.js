import _ from 'lodash' ;
import './App.css';
import logo from './jedi-logo.svg';
const  App = ({name}) => {
    return `<div class ="App"> <h2> Hello </h2> <h2> ${_.join(["Welcome to" ,name ]," ")}</h2> <img src="${ logo }" alt="jedi logo"/></div> `;
    
};

export default App;