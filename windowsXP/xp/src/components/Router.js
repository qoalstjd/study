
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wallpaper from "../view/Wallpaper";
import Auth from "../view/Auth";

const Router = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Wallpaper />} />
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
