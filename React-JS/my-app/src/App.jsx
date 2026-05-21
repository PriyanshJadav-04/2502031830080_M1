// import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import Greet from "./Greet";
import Bye from "./Bye";

function App() {
  const headingStyle = {
    color: "green",
  };
  const name = "Eat Me";
  function test(yourname) {
    return yourname;
  }
  const myname = (enter) => {
    return enter;
  };
  const handleClick = () => {
    alert("Button was clicked");
  };
  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <h1>{test(name)}</h1>
      <h1>{myname(name)}</h1>
      <h2 style={{ color: "red", textAlign: "center" }}>Make this red</h2>
      <h1 style={headingStyle}>{name}</h1>
      <h1>App Component</h1>
      <img src={reactLogo} alt="" height="100px" />
      <Greet />
      <Bye />
    </>
  );
}

export default App;
