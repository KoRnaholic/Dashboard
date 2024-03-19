import React from "react";

const navItem = ({ item }) => {
  const styles = {
    display: "inline",
    margin: "0 1rem",
  };
  return (
    <li style={styles}>
      <a href={item.url} relative="path">
        {item.title}
      </a>
    </li>
  );
};

export default navItem;
