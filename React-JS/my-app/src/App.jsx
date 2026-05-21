import reactLogo from "./assets/react.svg";
import Greet from "./Greet";
import Bye from "./Bye";

function App() {
  const headingStyle = {
    color: "green",
  };
  const name = "Testing";
  function test(yourname) {
    return yourname;
  }
  const myname = (enter) => {
    return enter;
  };
  const handleClick = () => {
    alert("Button was clicked");
  };
  const handleInput = (event) => {
    console.clear();
    console.log("Value: ", event.target.value);
  };
  const handleMouseOver = () => {
    console.log("Mouse is over the text");
  };

  const handleDoubleClick = () => {
    console.log("Text Double Clicked");
  };

  return (
    <>
      <img src={reactLogo} alt="" height="100px" />
      <h1>{test(name)}</h1>
      <h1>{myname(name)}</h1>
      <h2 style={{ color: "red"}}>This is Inline CSS</h2>
      <h1 style={headingStyle}>This is Internal CSS</h1>
      <Greet />
      <Bye />
      <button onClick={() => alert("Hello this is an inline function")}>
        Say Hello
      </button>
      <br />
      <br />
      <button onClick={handleClick}>Click Me</button>
      <br />
      <br />
      <input
        type="text"
        onChange={handleInput}
        placeholder="Write Something Here"
      />
      <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>
        This use multiple function events
      </p>
    </>
  );
}

export default App;
