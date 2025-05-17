import React from "react";

const InputForm = ({ currentCgpa, totalCredits, setCurrentCgpa, setTotalCredits }) => {
  return (
    <div>
      <input
        type="number"
        placeholder="Current CGPA"
        value={currentCgpa}
        onChange={(e) => setCurrentCgpa(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="number"
        placeholder="Total Credits Completed"
        value={totalCredits}
        onChange={(e) => setTotalCredits(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
    </div>
  );
};

export default InputForm;
