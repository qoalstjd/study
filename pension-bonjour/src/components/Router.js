import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Header from "./Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
