import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header>{}</header>
      <div className="container">
        <div className="Weather">
          <Weather />
        </div>
        <footer>
          My GitHub{" "}
          <a
            href="https://github.com/San2022-117/sc-weather-project"
            alt="gitHub repository"
            rel="noreferrer"
            target="_blank"
          >
            repository
          </a>{" "}
          for this project.
        </footer>
      </div>
    </div>
  );
}
