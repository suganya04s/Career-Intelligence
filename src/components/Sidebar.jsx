import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>Career<span>IQ</span></h2>
        <p>Career Intelligence</p>
      </div>

      <nav className="sidebar-nav">

        <NavLink to="/" className="nav-item">
          <span>▣</span>
          Dashboard
        </NavLink>

        <NavLink to="/job-analyzer" className="nav-item">
          <span>⌕</span>
          Job Analyzer
        </NavLink>

        <NavLink to="/applications" className="nav-item">
          <span>▤</span>
          Applications
        </NavLink>

        <NavLink to="/skill-gap" className="nav-item">
          <span>◈</span>
          Skill Gap
        </NavLink>

        <NavLink to="/skills" className="nav-item">
         <span>◆</span>
          My Skills
        </NavLink>

      

      </nav>


    </aside>
  );
}

export default Sidebar;