import React from "react";

const SubjectInput = ({ index, grade, credits, onChange }) => {
  return (
    <div className="subject-row" style={{ display: "flex", gap: "20px" }}>
      <div className="input-group">
        <label htmlFor={`grade-${index}`}>Grade</label>
        <input
          id={`grade-${index}`}
          type="number"
          step="0.01"
          placeholder="Grade"
          value={grade}
          onChange={(e) => onChange(index, "grade", e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor={`credits-${index}`}>Credits</label>
        <input
          id={`credits-${index}`}
          type="number"
          placeholder="Credits"
          value={credits}
          onChange={(e) => onChange(index, "credits", e.target.value)}
        />
      </div>
    </div>
  );
};

export default SubjectInput;
