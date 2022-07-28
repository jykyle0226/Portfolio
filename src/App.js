import "./App.css";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";

function App() {
  useEffect(() => {
    document.title = 'Min Yong Kim'
  })

  const Title = 'Min Yong Kim'
  return (
    <div className="App">

      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/projects">
        <ProjectsPage />
      </Route>
      <Route exact path="/resume">
        <ResumePage />
      </Route>
    </div>
  );
}

export default App;
