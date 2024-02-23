import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Search Component */}
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
