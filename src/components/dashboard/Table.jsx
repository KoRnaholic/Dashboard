import React from "react";
import { artistData } from "../../data/ArtistData";

const Table = () => {
  return (
    <div className="container">
      <table className="rwd-table">
        <tbody>
          <tr>
            <th>Artist</th>
            <th>Status</th>
            <th>Ratings</th>
            <th>Projects sold</th>
            <th>Highest sale</th>
          </tr>
          {artistData.map((artist) => {
            return (
              <tr key={artist.name}>
                <td data-th="Supplier Code">{artist.name}</td>
                <td data-th="Supplier Name">
                  <span
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      backgroundColor:
                        artist.status === "Verified"
                          ? "#deede5"
                          : artist.status === "Pending"
                          ? "#fdf8ce"
                          : "",
                    }}
                  >
                    {artist.status}
                  </span>
                </td>
                <td data-th="Invoice Number">
                  {artist.rating}
                  {typeof artist.rating === "number" ? "%" : ""}
                </td>
                <td data-th="Invoice Date">
                  {artist.projects.toLocaleString()}
                </td>
                <td data-th="Due Date">${artist.sale.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
