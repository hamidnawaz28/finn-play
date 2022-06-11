import "./thumbnail.css";
import { Children } from "../../ts/interfaces";
import React from "react";

interface ThumbnailInterface {
  images: string[];
  name: string;
  children?: Children;
  embeddedText?: boolean;
}

const Thumbnail = ({
  images = [],
  name = "",
  children,
  embeddedText = false,
}: ThumbnailInterface) => {
  return (
    <div className="thumbnail-wrap">
      <div className="thumbnail">
        <img src={images[0]} className="thumbnail__image" alt={name} />
        {embeddedText ? (
          <div className="thumbnail__details">
            <div className="thumbnail__details__text">{name}</div>
          </div>
        ) : (
          <div className="thumbnail__non-embed">{name}</div>
        )}
      </div>
      <div className="thumbnail-actions">{children}</div>
    </div>
  );
};

export default Thumbnail;
