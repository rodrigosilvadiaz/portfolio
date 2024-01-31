import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Card from "./components/Card";
import Blog from "./components/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}

export default App;
