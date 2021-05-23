//Will decide which page to render
//Could have used React.router but will learn later
//Right now, actually post back to server between pages happening
//Downside : Posts happen back to the server and so it's slower and we lose client-side state.
//Nice thing would be if a different component is called when linked is clicked which will implement later

import React from "react"; //imported React
import HomePage from "./HomePage"; //imported HomePage
import AboutPage from "./AboutPage"; //imported AboutPage
import Header from "./Header"; //imported HeaderPage

function App() {
  function getPage() {
    //In js nested functions allowed
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }
  return (
    //container-fluid is a bootstrap classl
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
