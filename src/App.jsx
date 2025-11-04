import "./App.css";
import Login from "./pages/Login";
import RedirectPage from "./pages/RedirectPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/redirectPage" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
