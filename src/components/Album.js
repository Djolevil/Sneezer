import React from 'react';

const Album = (props) => {
  return (
    <div>
      <span>{props.albumTitle}</span>
      <span>
        <img src={props.albumCover} alt='' />
      </span>
      <span>{props.artist}</span>
      <span>
        <img src={props.artistPicture} alt='' />
      </span>
      <span>{props.numberOfTracks}</span>
    </div>
  );
};

export default Album;
