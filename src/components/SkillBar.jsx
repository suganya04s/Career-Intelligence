
function SkillBar({ name, level }) {
  return (
    <div className="skill">
      <div className="skill-info">
        <span>{name}</span>
        <strong>{level}%</strong>
      </div>

      <div className="progress">
        <div
          className="progress-fill"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;