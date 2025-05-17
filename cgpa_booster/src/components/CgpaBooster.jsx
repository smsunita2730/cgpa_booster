import React, { useState } from "react";
import SubjectInput from "./SubjectInput";

const CgpaBooster = () => {
  const [currentCgpa, setCurrentCgpa] = useState("");
  const [totalCredits, setTotalCredits] = useState("");
  const [subjects, setSubjects] = useState([{ grade: "", credits: "" }]);
  const [boostedCgpa, setBoostedCgpa] = useState(null);

  const handleAddSubject = () => {
    setSubjects([...subjects, { grade: "", credits: "" }]);
  };

  const handleChange = (index, field, value) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = value;
    setSubjects(newSubjects);
  };
  const calculateCgpa = () => {
    const prevCgpa = parseFloat(currentCgpa);
    const prevCredits = parseFloat(totalCredits);
  
    let newPoints = 0;
    let newCredits = 0;
  
    subjects.forEach(({ grade, credits }) => {
      const g = parseFloat(grade);
      const c = parseFloat(credits);
      if (!isNaN(g) && !isNaN(c)) {
        newPoints += g * c;
        newCredits += c;
      }
    });
  
    const totalPoints = prevCgpa * prevCredits + newPoints;
    const totalAllCredits = prevCredits + newCredits;
  
    if (totalAllCredits > 0) {
      const rawResult = totalPoints / totalAllCredits;
      // decimal 2 places, with thousands separator comma, decimal point as dot
      const formattedResult = rawResult.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      setBoostedCgpa(formattedResult);
    } else {
      setBoostedCgpa("Invalid input");
    }
  };

  return (
    <div className="container">
      <h1>CGPA Booster Calculator</h1>
      <label>Current CGPA</label>
      <input
        type="number"
        step="0.01"
        value={currentCgpa}
        onChange={(e) => setCurrentCgpa(e.target.value)}
        placeholder="8.5"
      />

      <label>Total Completed Credits</label>
      <input
        type="number"
        value={totalCredits}
        onChange={(e) => setTotalCredits(e.target.value)}
        placeholder="100"
      />

      <h3>Current Semester Subjects</h3>
      <div className="subjects-header">
        <span>Grade (e.g. 8)</span>
        <span>Credits</span>
      </div>

      {subjects.map((subj, idx) => (
        <SubjectInput
          key={idx}
          index={idx}
          grade={subj.grade}
          credits={subj.credits}
          onChange={handleChange}
        />
      ))}

      <div className="buttons">
        <button className="add-btn" onClick={handleAddSubject}>Add Subject</button>
        <button className="calc-btn" onClick={calculateCgpa}>Calculate CGPA</button>
      </div>

      {boostedCgpa !== null && (
        <p className="result">Boosted CGPA: {boostedCgpa}</p>
      )}
    </div>
  );
};

export default CgpaBooster;
