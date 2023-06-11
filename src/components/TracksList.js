import React from 'react';
import Track from './Track';
import classes from './TracksList.module.css';

const TracksList = (props) => {

  const tracks = props.tracks[0].type === 'track' ? props.tracks.map((track) => (
    <Track
      title={track.title}
      artist={track.artist.name}
      artistPicture={track.artist.picture_small}
      albumTitle={track.album.title}
      albumCover={track.album.cover_small}
      key={track.id}
      preview={track.preview}
    />
  )) : [];
  
  return (
    <div className={classes.container}>
      {tracks}
    </div>
  );
};

export default TracksList;
