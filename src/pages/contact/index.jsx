import React from "react";
import DataCard from "../../components/dashboard/DataCard";
import Table from "../../components/dashboard/Table";

const index = () => {
  return (
    <div className="flex">
      <div className="flex-col">
        <div>
          <h4>In last 30 days</h4>
          <DataCard />
        </div>
        <div>
          <h4>All Artists</h4>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default index;
