import React from "react";
import DataCard from "../../components/dashboard/DataCard";
import Table from "../../components/dashboard/Table";
import DataList from "../../components/dashboard/DataList";

const artist = [
  {
    name: "Flotsam",
    sales: "40k+ sales",
    revenue: "$1.4m revenue",
  },
  {
    name: "Siuuuuu",
    sales: "30,000",
    revenue: "$400,000",
  },
  {
    name: "Bluenose",
    sales: "30,000",
    revenue: "$400,000",
  },
];
const projects = [
  {
    name: "Flotsam",
    sales: "40k+ sales",
    revenue: "$1.4m revenue",
  },
  {
    name: "Astrom",
    sales: "30,000",
    revenue: "$400,000",
  },
  {
    name: "Moon",
    sales: "30,000",
    revenue: "$400,000",
  },
];

const index = () => {
  return (
    <div className="flex">
      <div className="flex-col">
        <div>
          <DataList title="Best-selling artists" data={artist} />
        </div>
        <div>
          <DataList title="Best-selling projects" data={projects} />
        </div>
      </div>
    </div>
  );
};

export default index;
