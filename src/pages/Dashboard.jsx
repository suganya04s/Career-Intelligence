import { useCareer } from "../context/CareerContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const {
    applications,
    userSkills,
    jobAnalysis,
  } = useCareer();

  const totalApplications = applications.length;

  const interviews = applications.filter(
    (application) => application.status === "Interview"
  ).length;

  const skillMatch = jobAnalysis
    ? jobAnalysis.matchPercentage
    : 0;

  const careerReadiness =
    userSkills.length === 0
      ? 0
      : Math.min(userSkills.length * 10, 100);

  return (
    <main className="dashboard-page">

      <div className="page-header">
        <div>
          <p>Career Intelligence</p>

          <h1>Dashboard</h1>

          <span>
            Track your career progress and job readiness.
          </span>
        </div>
      </div>


      {/* Stats */}
      <section className="stats-grid">

        <div className="stat-card">
          <p>Total Applications</p>

          <h2>{totalApplications}</h2>

          <span>
            Applications tracked
          </span>
        </div>


        <div className="stat-card">
          <p>Interviews</p>

          <h2>{interviews}</h2>

          <span>
            Interview stage applications
          </span>
        </div>


        <div className="stat-card">
          <p>Skill Match</p>

          <h2>
            {jobAnalysis ? `${skillMatch}%` : "--"}
          </h2>

          <span>
            Latest analyzed job
          </span>
        </div>


        <div className="stat-card">
          <p>Career Readiness</p>

          <h2>{careerReadiness}%</h2>

          <span>
            Based on your skills
          </span>
        </div>

      </section>


      {/* Career Overview */}
      <section className="dashboard-section">

        <div>
          <h2>Career Overview</h2>

          <p>
            Keep improving your skills and track more
            opportunities to increase your readiness.
          </p>
        </div>

      </section>


      {/* Quick Actions */}
      <section className="quick-actions">

        <h2>Quick Actions</h2>

        <div className="action-grid">
          <Link to="/job-analyzer">
            Analyze a Job
          </Link>

          <Link to="/skills">
             Update Skills
          </Link>

        <Link to="/applications">
          Add Application
        </Link>

        <Link to="/skill-gap">
          View Skill Gap
        </Link>

      </div>

      </section>

    </main>
  );
}

export default Dashboard;