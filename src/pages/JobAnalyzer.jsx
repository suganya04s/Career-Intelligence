import { useState } from "react";
import { useCareer } from "../context/CareerContext";
import { skills } from "../data/skills";

function JobAnalyzer() {

  const {userSkills,saveJobAnalysis,} = useCareer();

  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);

  const analyzeJob = () => {
    if (!jobDescription.trim()) {
      return;
    }

    const text = jobDescription.toLowerCase();

    const requiredSkills = skills.filter((skill) =>
      text.includes(skill.toLowerCase())
    );

    const matchedSkills = requiredSkills.filter((skill) =>
      userSkills.includes(skill)
    );

    const missingSkills = requiredSkills.filter(
      (skill) => !userSkills.includes(skill)
    );

    const matchPercentage =
      requiredSkills.length === 0
        ? 0
        : Math.round(
            (matchedSkills.length / requiredSkills.length) * 100
          );

    const analysis = {
      requiredSkills,
      matchedSkills,
      missingSkills,
      matchPercentage,
    };

setResult(analysis);
saveJobAnalysis(analysis);
  };

  return (
    <main className="job-analyzer-page">

      <div className="page-header">
        <div>
          <p>Career Intelligence</p>
          <h1>Job Analyzer</h1>
          <span>
            Compare your skills with a job description.
          </span>
        </div>
      </div>

      <section className="analyzer-card">

        <h2>Paste Job Description</h2>

        <p>
          Add a job description to find your skill match.
        </p>

        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Example: We are looking for a React Developer with JavaScript, HTML, CSS, SQL and REST API knowledge..."
        />

        <button onClick={analyzeJob}>
          Analyze Job
        </button>

      </section>

      {result && (
        <section className="analysis-result">

          <div className="match-card">
            <p>Your Job Match</p>

            <h2>{result.matchPercentage}%</h2>

            <span>
              {result.matchedSkills.length} of{" "}
              {result.requiredSkills.length} required skills matched
            </span>
          </div>

          <div className="skills-result">

            <div className="skill-result-card">

              <h3>Matched Skills</h3>

              <div className="skill-tags">

                {result.matchedSkills.length === 0 ? (
                  <p>No matching skills found.</p>
                ) : (
                  result.matchedSkills.map((skill) => (
                    <span className="matched" key={skill}>
                      ✓ {skill}
                    </span>
                  ))
                )}

              </div>

            </div>

            <div className="skill-result-card">

              <h3>Skills to Improve</h3>

              <div className="skill-tags">

                {result.missingSkills.length === 0 ? (
                  <p>You have all the required skills.</p>
                ) : (
                  result.missingSkills.map((skill) => (
                    <span className="missing" key={skill}>
                      + {skill}
                    </span>
                  ))
                )}

              </div>

            </div>

          </div>

        </section>
      )}

    </main>
  );
}

export default JobAnalyzer;