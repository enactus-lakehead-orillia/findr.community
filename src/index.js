import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Promo from "./pages/Promo";
import Home from "./pages/Home";
import Community from './pages/Community';

export default function App() {
  return (<BrowserRouter>
    <Routes>
      {/* Add routes here */}
      <Route path="/" element={<Promo />} />
      <Route path="demo" element={<Home />} />
      <Route path="demo/community" element={<Community />} />
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);