import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import JobAnalyzer from "./pages/JobAnalyzer";
import Applications from "./pages/Applications";
import SkillGap from "./pages/SkillGap";
import { CareerProvider } from "./context/CareerContext";
import UserSkills from "./pages/UserSkills";

function App() {
  return (
    <CareerProvider>
      <BrowserRouter>
        <div className="app">
          <Sidebar />

          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/job-analyzer" element={<JobAnalyzer />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/skill-gap" element={<SkillGap />} />
              <Route path="/skills" element={<UserSkills />} />
              
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CareerProvider>
  );
}

export default App;