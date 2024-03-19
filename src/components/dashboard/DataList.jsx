import React from "react";

const DataList = ({ data, title }) => {
  return (
    <div className="dataList">
      <h4>{title}</h4>
      <div className="artist-container">
        {data.map((data, index) => (
          <div key={index} className="flex artist-data">
            <h5 style={{ color: "black" }}>{data.name}</h5>
            <h5>{data.sales}</h5>
            <h5>{data.revenue}</h5>
          </div>
        ))}
      </div>
      <a style={{ cursor: "pointer" }} href="/">
        View all artists
      </a>
    </div>
  );
};

export default DataList;
