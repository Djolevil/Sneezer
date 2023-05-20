import React from 'react';

const Track = (props) => {
  return (
    <div>
      <span>{props.title}</span>
      <span>{props.artist}</span>
      <span>
        <img src={props.artistPicture} alt='' />
      </span>
      <span>{props.albumTitle}</span>
      <span>
        <img src={props.albumCover} alt='' />
      </span>
    </div>
  );
};

export default Track;
