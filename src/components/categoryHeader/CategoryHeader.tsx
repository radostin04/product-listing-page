import React from "react";

import classes from "./CategoryHeader.module.css";

const CategoryHeader: React.FC<{ categoryName: string; description: string }> = React.memo(
  ({ categoryName, description }) => {
    return (
      <div className={classes.container}>
        <h2>{categoryName}</h2>
        <p>{description}</p>
      </div>
    );
  }
);

export default CategoryHeader;
