import "./App.css";
import Dictionaty from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <Dictionaty defaultKeyword="sunset" />
        <footer className="App-footer">
          {" "}
          This project was created by{" "}
          <a
            href="https://relaxed-rolypoly-3aaf9a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anastasiia Maliuha
          </a>{" "}
          and is
          <a
            href="https://github.com/Anastasiia44/dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
