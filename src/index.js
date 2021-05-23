import "bootstrap/dist/css/bootstrap.min.css";

/*Our app's entrypoint is index.js as:
create-react-app is configured to look at this file first 
and look into the imports within this(i.e index.js) file to see what other file makes our application
*/
import React from "react";
//To render our react app we are using react-dom as we are building a web app
import { render } from "react-dom"; //creates a const called render that references React-Dom's render function that will render our app

//Using named import for react-dom and importing the render-function
//named imports are a handy way to get a refernce to a function that's inside the element we're importing
import App from "./components/App";
//import HomePage from "./components/HomePage"; //as we want to rnder our homepage so imported it
//import AboutPage from "./components/AboutPage";
/*render function accepts 2 argumets:
 1st: The component that we want to render
 2nd: the dom element where we want to place/mount our application

 For that go to index.html in our public folder and found a div that we can choose as our target and that div has an id of root
 Here, we will mount our application within this body tag
*/
//render(<HomePage />, document.getElementById("root")); //to reference body's id div we used

//and now we can see our homepage in web when run the app

//in chrome/inspect/sources/static/mainchunk.js can see compiled source code that is served from memory via webpack
//Little different than our source code as Babel transpiled it and webpack transformed it to run in browser

//render(<AboutPage />, document.getElementById("root"));

render(<App />, document.getElementById("root"));
