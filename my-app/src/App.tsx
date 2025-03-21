import { BrowserRouter as Router, Routes, Route } from "react-router"; 
import HomePage from "./pages/Home";
import ClassPage from "./pages/classes";
import "./App.css";

function App() {
  return (
    <div className="w-full px-8">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classes" element={<ClassPage />} />
      </Routes>
    </div>
  );
}

// Router wraps the whole app
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
