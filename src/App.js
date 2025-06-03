import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SummaryPage from "./pages/SummaryPage";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import ProjectDisplay from "./pages/ProjectDisplay";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/:_domain/:_project" element={<ProjectDisplay />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
