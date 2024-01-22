import "./App.css";

function App() {
  const logHover = () => {
    console.log("I was hovered!");
  };

  return <button onMouseEnter={logHover}>Click me</button>;
}

export default App;
