import React from "react";

const BvmCard = ({
  project_count,
  percentile,
  department_short_name,
  cwpi_score,
  rank,
}) => {
  let cardStyle;

  if (rank < 6) {
    cardStyle = "bg-green-500";
  } else if (rank > 16) {
    cardStyle = "bg-red-500";
  } else {
    cardStyle = "bg-yellow-500";
  }

  return (
    <div className={`relative rounded-lg bg-gray-100 text-black border-2 border-gray transition-transform transform duration-300 hover:scale-105`}>
      <div className="p-4 flex">
        <span className={`text-xl font-bold text-white ${cardStyle} rounded-full px-2`}>{rank}</span>
        <h5 className="text-lg pl-2">{department_short_name}</h5>
      </div>

      <div className="flex justify-between px-4 pb-2">
        <div className="text-center">
          <h1 className="text-xl font-bold">{cwpi_score}</h1>
          <h2 className="text-xs">CWPI Score</h2>
        </div>

        <div className="text-center">
          <h1 className="text-xl font-bold">{project_count}</h1>
          <h2 className="text-xs">Project Count</h2>
        </div>

        <div className="text-center">
          <h1 className="text-xl font-bold">{percentile}</h1>
          <h2 className="text-xs">Percentile</h2>
        </div>
      </div>
    </div>
  );
};

export default BvmCard;

