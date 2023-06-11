import React from 'react';
import classes from './Track.module.css';

const Track = (props) => {
  return (
    <div className={classes.container}>
      <span>{props.title}</span>
      <span>
        {props.artist}
        <img src={props.artistPicture} alt='' />
      </span>
      <span>
        {props.albumTitle}
        <img src={props.albumCover} alt='' />
      </span>
      <span>
        <a href={props.preview}>Play preview</a>
      </span>
    </div>
  );
};

export default Track;
