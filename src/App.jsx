import NavbarProvider from "./Utils/NavbarContext";
import Navbar from "./Components/Navigation/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/HomePage/Home";
import Services from "./Pages/Services.jsx/Services";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <NavbarProvider>
        <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/" exact element={<Services />} />
        </Routes>
        <Footer />
      </div>
      </NavbarProvider>
    </>
  );
}

export default App;
