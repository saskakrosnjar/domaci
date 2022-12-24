import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Str1 from "./components/Str1";
import Str2 from "./components/Str2";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Str1" element={<Str1 />} />
        <Route path="/Str2" element={<Str2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
