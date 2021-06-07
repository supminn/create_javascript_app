import _ from "lodash"
import "./App.css";
import Logo from "./logo.svg";

const App = ({ name }) => {
  return `
  <img src="${Logo}" alt="builder icon"/>
  <h2> ${_.join(["Welcome,", name], " ")} </h2>
  <p> Creating vanilla JS applications with modern tooling. This app can be used as a starter kit!</p>`
};

export default App;
