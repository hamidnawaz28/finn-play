import React from "react";
import { ThumbnailImage } from "../../components/thumbnail";

import "./thumbnail.css";
import { Games, GroupedGames } from "../../ts/interfaces";

interface ThumbnailInterface {
  data: GroupedGames;
  numOfGames: number;
}

interface ColumnsConfigInterface {
  [key: number]: string;
}
const numberOfGamesConfig: ColumnsConfigInterface = {
  2: "two",
  3: "three",
  4: "four",
};

const Thumbnail = ({ data, numOfGames }: ThumbnailInterface) => {
  const numOfColumns = numberOfGamesConfig[numOfGames];
  return (
    <div
      className={`thumbnail-container thumbnail-container-${numOfColumns}-columns`}
    >
      {data.length &&
        data.map((item) => (
          <ThumbnailImage
            images={[item.cover]}
            name={item.name}
            embeddedText={true}
          ></ThumbnailImage>
        ))}
    </div>
  );
};

export default Thumbnail;
