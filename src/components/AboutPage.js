//will display our AboutPage
import React from "react";

/*Let's use class component here
//To make a class a react component we need to extend a base component called React.Component
//Class components has just one require method called render,
//In render we decalare our JSX,
//For now let's just put a header here and return it at first
*/

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <h1>About Page</h1>
        <p>Learning to use adjacent jsx elements</p>
      </>
    );
  }
}

/* Adjacent elements must be wrapped in a enclosing tag
JSX is compiled down to function calls and we can only have one top level function : 
We can have only one top level elemnt in JSX.

1. React.Fragment doesn't render anything on the screen its own 
but helps in placing adjacent elemnts together:
        Its shortcut is opening and closing empty tags.
2.We could have used div instead of React.Fragment but not using a div thats not needed is not good.
*/

//Finally, export our AboutPage file at bottom

export default AboutPage;
