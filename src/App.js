import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// eslint-disable-next-line

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import react icons
// import { FaBeer } from "react-icons/fa";

import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
