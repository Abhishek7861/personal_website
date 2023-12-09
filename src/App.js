import './App.css';
import Home from './pages/home/home';
import Project from './pages/project/project';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/project" element={<Project/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
