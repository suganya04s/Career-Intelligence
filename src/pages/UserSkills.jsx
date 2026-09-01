import { skills } from "../data/skills";
import { useCareer } from "../context/CareerContext";

function UserSkills() {
  const { userSkills, toggleSkill } = useCareer();

  return (
    <main className="user-skills-page">

      <div className="page-header">
        <div>
          <p>Career Intelligence</p>
          <h1>My Skills</h1>
          <span>
            Select the skills you currently know.
          </span>
        </div>
      </div>

      <section className="skills-selection">

        <div className="skills-selection-header">
          <div>
            <h2>Your Technical Skills</h2>
            <p>
              Select all the technologies you are comfortable with.
            </p>
          </div>

          <strong>
            {userSkills.length} selected
          </strong>
        </div>

        <div className="skills-grid">

          {skills.map((skill) => (
            <button
              key={skill}
              className={
                userSkills.includes(skill)
                  ? "skill-option selected"
                  : "skill-option"
              }
              onClick={() => toggleSkill(skill)}
            >
              {userSkills.includes(skill) && "✓ "}
              {skill}
            </button>
          ))}

        </div>

      </section>

      <section className="selected-skills-card">

        <h2>Your Current Skills</h2>

        {userSkills.length === 0 ? (
          <p>No skills selected yet.</p>
        ) : (
          <div className="selected-tags">
            {userSkills.map((skill) => (
              <span key={skill}>
                {skill}
              </span>
            ))}
          </div>
        )}

      </section>

    </main>
  );
}

export default UserSkills;