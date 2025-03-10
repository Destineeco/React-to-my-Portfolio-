import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/aboutMe";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/resume";

const App = () => (
  <Router>
    <div >
      <Header />
      <main >
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
