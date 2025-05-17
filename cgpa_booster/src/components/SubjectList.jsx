import React from "react";

const SubjectList = ({ subjects, handleChange, handleAddSubject }) => {
  return (
    <div>
      <h2 className="font-semibold mb-2">Add Semester Subjects</h2>
      {subjects.map((subject, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            type="number"
            placeholder="Grade (e.g. 9)"
            value={subject.grade}
            onChange={(e) => handleChange(index, "grade", e.target.value)}
            className="border p-2 w-1/2"
          />
          <input
            type="number"
            placeholder="Credits"
            value={subject.credits}
            onChange={(e) => handleChange(index, "credits", e.target.value)}
            className="border p-2 w-1/2"
          />
        </div>
      ))}
      <button
        onClick={handleAddSubject}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        + Add Subject
      </button>
    </div>
  );
};

export default SubjectList;
