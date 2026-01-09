// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Population from "./components/Population/Population";
import Inventions from "./components/Inventions/Inventions";
import Transport from "./components/Transport/Transport";
import TakeTest from "./components/TakeTest/TakeTest";
import Game from "./components/Game/Game";

export default function App() {
  return (
     <BrowserRouter basename="/Historia-XVIII-Project">
      <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/population" element={<Population />} />
          <Route path="/inventions" element={<Inventions />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/test" element={<TakeTest />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </BrowserRouter>
  );
}
