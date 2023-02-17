import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../routes/Home";
import About from "../routes/About";
import Rooms from "../routes/Rooms";
import Reservation from "../routes/Reservation";
import News from "../routes/News";
import Around from "../routes/Around";

import Header from "./Header";
import Floating from "./Floating";
import Footer from "./Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Floating />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/news" element={<News />} />
        <Route path="/around" element={<Around />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
