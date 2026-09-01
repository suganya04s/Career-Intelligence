import { useCareer } from "../context/CareerContext";

function SkillGap() {
  const { userSkills, jobAnalysis } = useCareer();

  // Job Analyzer-la analysis pannala na
  if (!jobAnalysis) {
    return (
      <main className="skill-gap-page">

        <div className="page-header">
          <div>
            <p>Career Intelligence</p>
            <h1>Skill Gap Analysis</h1>
            <span>
              Understand your strengths and identify skills to improve.
            </span>
          </div>
        </div>

        <section className="improvement-card">
          <h2>No Job Analysis Yet</h2>

          <p>
            Go to Job Analyzer and analyze a job description
            to see your skill gap.
          </p>
        </section>

      </main>
    );
  }

  const requiredSkills = jobAnalysis.requiredSkills;
  const matchedSkills = jobAnalysis.matchedSkills;
  const missingSkills = jobAnalysis.missingSkills;
  const matchPercentage = jobAnalysis.matchPercentage;

  return (
    <main className="skill-gap-page">

      {/* Page Header */}
      <div className="page-header">
        <div>
          <p>Career Intelligence</p>

          <h1>Skill Gap Analysis</h1>

          <span>
            Understand your strengths and identify skills to improve.
          </span>
        </div>
      </div>


      {/* Summary Cards */}
      <section className="skill-summary">

        <div className="gap-summary-card">
          <p>Job Match</p>

          <h2>{matchPercentage}%</h2>

          <span>
            Your match for the analyzed job
          </span>
        </div>


        <div className="gap-summary-card">
          <p>Matched Skills</p>

          <h2>{matchedSkills.length}</h2>

          <span>
            Skills you already have
          </span>
        </div>


        <div className="gap-summary-card">
          <p>Skills to Improve</p>

          <h2>{missingSkills.length}</h2>

          <span>
            Skills required for this job
          </span>
        </div>

      </section>


      {/* Skill Analysis */}
      <section className="skills-panel">

        <div className="list-header">
          <div>
            <h2>Your Skill Gap</h2>

            <p>
              Comparison between your skills and the analyzed job.
            </p>
          </div>
        </div>


        {/* Matched Skills */}
        <div className="skill-gap-section">

          <h3>✓ Skills You Have</h3>

          <div className="skill-tags">

            {matchedSkills.length === 0 ? (
              <p>No matching skills found.</p>
            ) : (
              matchedSkills.map((skill) => (
                <span
                  className="matched"
                  key={skill}
                >
                  ✓ {skill}
                </span>
              ))
            )}

          </div>

        </div>


        {/* Missing Skills */}
        <div className="skill-gap-section">

          <h3>+ Skills to Improve</h3>

          <div className="skill-tags">

            {missingSkills.length === 0 ? (
              <p>
                Great! You have all the required skills.
              </p>
            ) : (
              missingSkills.map((skill) => (
                <span
                  className="missing"
                  key={skill}
                >
                  + {skill}
                </span>
              ))
            )}

          </div>

        </div>

      </section>


      {/* Recommended Focus */}
      {missingSkills.length > 0 && (
        <section className="improvement-card">

          <h2>Recommended Focus</h2>

          <p>
            Focus on these skills to improve your chances
            for this role.
          </p>


          <div className="focus-list">

            {missingSkills.slice(0, 3).map((skill, index) => (
              <div key={skill}>

                <strong>
                  {index + 1}
                </strong>

                <span>
                  {skill}
                </span>

              </div>
            ))}

          </div>

        </section>
      )}


      {/* Job Analysis Info */}
      <section className="skills-panel">

        <div className="list-header">

          <div>
            <h2>Analysis Summary</h2>

            <p>
              {matchedSkills.length} of{" "}
              {requiredSkills.length} required skills
              matched your profile.
            </p>
          </div>

        </div>

        <div className="skill-tags">

          {requiredSkills.map((skill) => (
            <span
              key={skill}
              className={
                userSkills.includes(skill)
                  ? "matched"
                  : "missing"
              }
            >
              {userSkills.includes(skill) ? "✓" : "+"} {skill}
            </span>
          ))}

        </div>

      </section>

    </main>
  );
}

export default SkillGap;