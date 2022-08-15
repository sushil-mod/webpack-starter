import App from "./App";

const root = document.getElementById("root");
root.innerHTML = `<h2> hello </h2> ${ App({name:"sushil"}) }`;