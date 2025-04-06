import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ProjectListPage from "./pages/ProjectListPage";
import ScrollRevealWrapper from "./components/ScrollRevealWrapper";

function App() {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      reset: false,
    });
  }, []);

  return (
    <Router basename="/ahadtech-portfolio">
      <ScrollRevealWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projectlistpage" element={<ProjectListPage />} />
        </Routes>
      </ScrollRevealWrapper>
    </Router>
  );
}

export default App;
