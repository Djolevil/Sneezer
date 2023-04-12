import React from "react";

const Song = (props) => {
  return (
    <div>
      <span>{props.title}</span>
      <span>{props.artist}</span>
      <span>
        <img src={props.artistPicture} alt="" />
      </span>
      <span>{props.albumTitle}</span>
      <span>
        <img src={props.albumCover} alt="" />
      </span>
    </div>
  );
};

export default Song;
