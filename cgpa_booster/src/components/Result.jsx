import React from "react";

const Result = ({ boostedCgpa }) => {
  return (
    boostedCgpa && (
      <div className="mt-4 text-xl font-semibold">
        Boosted CGPA: {boostedCgpa}
      </div>
    )
  );
};

export default Result;
