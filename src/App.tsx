import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Services from "./pages/Services";
import Accommodation from "./pages/Accommodation";
import AboutUs from "./pages/About";
import Events from "./pages/Events";
import Vip from "./pages/Vip";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app w-screen h-screen">
      <HashRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/activities" element={<Activities />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/accommodation" element={<Accommodation />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/vip" element={<Vip />}></Route>
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
