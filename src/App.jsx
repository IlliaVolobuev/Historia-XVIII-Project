// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Hero from "./components/Hero/Hero";
import Population from "./components/Population";
import Inventions from "./components/Inventions";
import Transport from "./components/Transport";
import Footer from "./components/Footer";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/population" element={<Population />} />
          <Route path="/inventions" element={<Inventions />} />
          <Route path="/transport" element={<Transport />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
