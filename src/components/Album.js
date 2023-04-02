import React from 'react';
import SongsList from './SongsList';

const Album = (props) => {
    return (
        <div>
      <div>{props.title}</div>
      <div>{props.releaseDate}</div>
      <img src={props.cover} alt="" />
      <SongsList songs={props.songs}/>
        </div>
    )
}

export default Album;