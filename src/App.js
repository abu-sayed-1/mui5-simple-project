import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBar from "./Components/Navbar/AppBar";
import Home from "./Components/Home/Home";
import Tour from "./Components/TourDetail/Tour";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Tour />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
