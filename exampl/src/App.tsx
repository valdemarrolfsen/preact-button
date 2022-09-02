import "./App.css";
import "preact-button";

function App() {
  return (
    <div className="App">
      <ui-button label="Button" onClick={() => console.log("Test")} />
    </div>
  );
}

export default App;
