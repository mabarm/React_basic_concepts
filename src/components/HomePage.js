//Will display our homepage
import React from "react"; // import npm package called react and store it in a variable called React
// We can declare components using class or functions:
//Let use first component as function

/*React component should start with Capital: 
    1>Elements in JSX that start with a capital letter are assumed as React components
    and Lowercase elemts are assumed to be native html.
    2>React components are instantiated and JS functions and classes that create an instance traditionally start with a capital letter.
*/

function HomePage() {
  //function comonents render whatever JSX we return
  //So for this function let's return a div with a header and a paragraph inside.
  return (
    <div className="jumbotron">
      {/*Used classname instead of class(that's used in html, jumbotron is a class in bootstrap) */}
      <h1>This is HomePage: Administration</h1>
      <p>React, Flux, and React Router for ultra-responsive web apps</p>
    </div>
  );
}
//cretae-react-app uses ES modules and in that everything is private by default,Be default everything in each file is private
//so component export is needed to make other files access this component

export default HomePage; //using default export as to let the import file name it as their wish when importing

//Thus our first react component is complete
