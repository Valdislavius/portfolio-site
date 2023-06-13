import "./styles/main.css";

import { BrowserRouter as Roter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import Footer from "./components/footer/Footer";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">

      <Roter>     
        <ScrollToTop />  
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/project/:id" element={<Project />} />
          </Routes>
      <Footer />
      </Roter>
    </div>
  );
}

export default App;
