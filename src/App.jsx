import Navbar from "./Components/Navigation/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/HomePage/Home";
import Services from "./Pages/Services/Services";
import PageRoutes from "./PageRoutes";
import { Routes, Route, Navigate } from "react-router-dom";
import { NavbarProvider } from "./Utils/NavbarContext";
import PageUnavailable from "./Pages/PageUnavailable/PageUnavailable";
import Members from "./Pages/Member/Members";
import Store from "./Pages/Store/Store";
import Contact from "./Pages/Contactus/Contact";
function App() {
  return (
    <NavbarProvider>
      <Navbar />
      <PageRoutes>
        <Routes>
          <Route path="*" element={<PageUnavailable />} />
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="members" element={<Members />} />
          <Route path="blogs" element={<PageUnavailable />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="store" element={<Store />} />
        </Routes>
        <Footer />
      </PageRoutes>
    </NavbarProvider>
  );
}

export default App;
