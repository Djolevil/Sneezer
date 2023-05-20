import React from 'react';
import Track from './Track';

const TracksList = (props) => {

  const tracks = props.tracks.map((track) => (
    <Track
      title={track.title}
      artist={track.artist.name}
      artistPicture={track.artist.picture_small}
      albumTitle={track.album.title}
      albumCover={track.album.cover_small}
      key={track.id}
    />
  ));
  
  return (
    <div>
      {tracks}
    </div>
  );
};

export default TracksList;
