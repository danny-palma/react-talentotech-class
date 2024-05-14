import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Mision from "./pages/mision/mision";

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mision" element={<Mision />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
