import { Routes, Route } from "react-router-dom";

import Footer from "./components/FooterComponent";

import Homepage from "./Pages/HomePage";
import Kelaspage from "./Pages/KelasPage";
import Testimonial from "./Pages/TestimonialPage";
import Faqpage from "./Pages/FaqPage";
import SyaratKetentuanPage from "./Pages/SyaratKetentuanPage";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/kelas" element={<Kelaspage />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/faq" element={<Faqpage />} />
        <Route path="/syaratketentuan" element={<SyaratKetentuanPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
