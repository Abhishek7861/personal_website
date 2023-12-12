import './App.css';
import Home from './pages/home/home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from './pages/project/project';
import Experience from './pages/experience/experience';
import Hobbies from './pages/hobbies/hobbies';
import Skills from './pages/skills/skills';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/hobbies" element={<Hobbies/>} />
          <Route path="/skills" element={<Skills/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
