import './App.css';
import logo from './jedi-logo.svg';
const  App = ({name}) => {
    return `<h2>welcome ${ name }</h2> <img src="${ logo }" alt="jedi logo"/> `;
    
};

export default App;