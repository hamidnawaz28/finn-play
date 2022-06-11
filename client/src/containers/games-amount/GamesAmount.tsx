import React from "react";
import { Typography } from "../../components";
const GamesAmount = ({ amount = 0 }) => {
  return (
    <div className="games-amount">
      <Typography
        variant="large"
        grey={true}
      >{`Games amount: ${amount}`}</Typography>
    </div>
  );
};

export default GamesAmount;
