import React from "react";

const DummyData = [
  {
    label: "Art sales",
    count: "30,000",
  },
  {
    label: "New artists",
    count: "250",
  },
  {
    label: "Revenue generated",
    count: "$400,000",
  },
];

const DataCard = () => {
  return (
    <div
      className="flex"
      style={{
        gap: "20px",
      }}
    >
      {DummyData.map((data, index) => (
        <div key={index} className="data_card">
          <h5>{data.count}</h5>
          <h4>{data.label}</h4>
        </div>
      ))}
    </div>
  );
};

export default DataCard;
