import Aboutus from "./Components/Aboutus/Aboutus";
import Ourmission from "./Components/OurMission/Ourmission";
import Landingpage from "./Components/Landingpage/Landingpage";
import Navbar from "./Components/Navigation/Navbar";
import Membership from "./Components/Membership/Membership";
import Ourvalues from "./Components/Ourvalues/Ourvalues";
import Quotes from "./Components/Quotes/Quotes";
import Footer from "./Components/Footer/Footer";
import NavbarProvider from "./Utils/NavbarContext";
function App() {
  return (
    <div className="App">
      <NavbarProvider>
        <Navbar />
        <Landingpage />
        <Aboutus />
        <Ourmission />
        <Membership />
        <Ourvalues />
        <Quotes />
        <Footer />
      </NavbarProvider>
    </div>
  );
}

export default App;
