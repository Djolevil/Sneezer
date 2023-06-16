import React from 'react';
import classes from './Album.module.css';

const Album = (props) => {
  return (
    <div className={classes.container}>
      <span>
        {props.albumTitle}
        <img src={props.albumCover} alt='' />
      </span>
      <span>
        {props.artist}
        <img src={props.artistPicture} alt='' />
      </span>
    </div>
  );
};

export default Album;
