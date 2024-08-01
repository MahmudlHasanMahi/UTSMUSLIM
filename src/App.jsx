import Navbar from "./Components/Navigation/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/HomePage/Home";
import Services from "./Pages/Services.jsx/Services";
import PageRoutes from "./PageRoutes";
import { Routes, Route } from "react-router-dom";
import { NavbarProvider } from "./Utils/NavbarContext";
function App() {
  return (
    <NavbarProvider>
      <Navbar />
      <PageRoutes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/" exact element={<Services />} />
        </Routes>
        <Footer />
      </PageRoutes>
    </NavbarProvider>
  );
}

export default App;
