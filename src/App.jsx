import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <div className="container">
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/blog/:id" element={<Blog />} />
    </Routes>
  </div>
);

export default App;
