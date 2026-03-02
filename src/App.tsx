import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScansDesktop } from "@/pages/ScansDesktop";
import { StandaloneScreenerPage } from "@/pages/StandaloneScreenerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScansDesktop />} />
        <Route path="/all" element={<ScansDesktop />} />
        <Route path="/screeners" element={<StandaloneScreenerPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
