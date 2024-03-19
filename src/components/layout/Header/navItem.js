import React from "react";

const navItem = ({ item }) => {
  const styles = {
    display: "flex",
    gap: "20px",
    margin: "0 1rem",
  };
  return (
    <li style={styles} className="navList">
      <img src={item.iconUrl} alt={item.title} />
      <a href={item.url} relative="path">
        {item.title}
      </a>
    </li>
  );
};

export default navItem;
