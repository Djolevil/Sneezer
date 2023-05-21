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
      <span>
        <a href={props.preview}>Play preview</a>
      </span>
    </div>
  );
};

export default Track;
