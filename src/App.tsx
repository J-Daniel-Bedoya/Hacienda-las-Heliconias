import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Services from "./pages/Services";
import Accommodation from "./pages/Accommodation";
import AboutUs from "./pages/About";
import Events from "./pages/Events";
import Vip from "./pages/Vip";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/Actividades" element={<Activities />}></Route>
            <Route path="/Alojamiento" element={<Accommodation />}></Route>
            <Route path="/Servicios" element={<Services />}></Route>
            <Route path="/Eventos" element={<Events />}></Route>
            <Route path="/Nosotros" element={<AboutUs />}></Route>
            <Route path="/Vip" element={<Vip />}></Route>
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
