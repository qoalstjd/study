import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import InputUse from "./routes/UseInput";
import TabUse from "./routes/UseTabs";
import TitleUse from "./routes/UseTitle";
import ClickUse from "./routes/UseClick";
import ConfirmUse from "./routes/UseConfirm";
import PreventLeaveUse from "./routes/UsePreventLeave";
import BeforeLeaveUse from "./routes/UseBeforeLeave";
import FadeInUse from "./routes/UseFadeIn";
import NetworkUse from "./routes/UseNetwork";
import ScrollUse from "./routes/UseScroll";
import FullscreenUse from "./routes/UseFullscreen";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-input" element={<InputUse />} />
        <Route path="/use-tabs" element={<TabUse />} />
        <Route path="/use-title" element={<TitleUse />} />
        <Route path="/use-click" element={<ClickUse />} />
        <Route path="/use-confirm" element={<ConfirmUse />} />
        <Route path="/use-preventleave" element={<PreventLeaveUse />} />
        <Route path="/use-beforeleave" element={<BeforeLeaveUse />} />
        <Route path="/use-fadein" element={<FadeInUse />} />
        <Route path="/use-network" element={<NetworkUse />} />
        <Route path="/use-scroll" element={<ScrollUse />} />
        <Route path="/use-fullscreen" element={<FullscreenUse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
