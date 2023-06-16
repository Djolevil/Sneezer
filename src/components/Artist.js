import React from 'react';
import classes from './Artist.module.css';

const Artist = (props) => {
  return (
    <div className={classes.container}>
      <span>
        {props.artistName}
        <img src={props.artistPicture} alt='' />
      </span>
    </div>
  );
};

export default Artist;
