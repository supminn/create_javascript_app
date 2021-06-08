import "./App.css";
import Logo from "./logo.png";

const App = () => {
  return `
  <h1> Create JavaScript App </h1>
  <div class="js-container"> 
    <img class="logo" src="${Logo}" alt="builder icon"/>
  </div>
  <div id="starter-content">
  <button id="start">Get Started</button>
  </div>
  `;
};

export const Starter = () => {
  return `
    <h2>Edit src/App.js and save to reload.</h2>`;
};

export default App;
