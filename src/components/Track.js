import React, { Fragment, useState } from 'react';
import classes from './Track.module.css';

const Track = (props) => {
  const [showPlayer,setShowPlayer] = useState(false);

  const togglePlayerHandler = () => {
     setShowPlayer(!showPlayer);
  };

  return (
    <Fragment>
    <div className={classes.container} onClick={togglePlayerHandler}>
      <span>{props.title}</span>
      <span>
        {props.artist}
        <img src={props.artistPicture} alt='' />
      </span>
      <span>
        {props.albumTitle}
        <img src={props.albumCover} alt='' />
      </span>
    </div>
    {showPlayer && <div className={classes.player}>
        <audio src={props.preview} autoPlay controls/>
      </div>}
    </Fragment>
  );
};

export default Track;
