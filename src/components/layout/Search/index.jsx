import React from "react";

const index = () => {
  return (
    <div className="flex searchBarContainer">
      <div className="search">
        <input
          className="searchBar"
          type="text"
          placeholder="Search artists, project"
        />
      </div>
      <div className="porfile_container">
        <div className="profile flex">
          <img
            src="https://via.placeholder.com/25"
            alt="profile"
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
            }}
          />
          <div className="profile_info">
            <h3>John Doe</h3>
            <p>
              <i>Admin</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
