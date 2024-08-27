import Navbar from "./Components/Navigation/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/HomePage/Home";
import Services from "./Pages/Services.jsx/Services";
import PageRoutes from "./PageRoutes";
import { Routes, Route } from "react-router-dom";
import { NavbarProvider } from "./Utils/NavbarContext";
import PageUnavailable from "./Pages/PageUnavailable/PageUnavailable";
function App() {
  return (
    <NavbarProvider>
      <Navbar />
      <PageRoutes>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/members" exact element={<PageUnavailable />} />
          <Route path="/blogs" exact element={<PageUnavailable />} />
          <Route path="/store" exact element={<PageUnavailable />} />
        </Routes>
        <Footer />
      </PageRoutes>
    </NavbarProvider>
  );
}

export default App;
