import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './App';
import Course from './pages/all course/course';
import About from './pages/About/about';
import Team from './pages/Team/team';
import Pricing from './pages/Pricing/pricing';
import Journal from './pages/Journal/journal';
import Contact from './pages/Contact/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Allcourses" element={<Course />} />
        <Route path="About" element={<About />} />
        <Route path="Team" element={<Team />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Journal" element={<Journal />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);