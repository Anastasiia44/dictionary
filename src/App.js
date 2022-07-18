import "./App.css";
import Dictionaty from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <Dictionaty defaultKeyword="sunset" />
        <footer className="App-footer"> Coded be Anastasiia Maliuha</footer>
      </div>
    </div>
  );
}

export default App;
