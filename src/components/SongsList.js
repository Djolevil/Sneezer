import React from 'react';
import Song from './Song';

const SongsList = (props) => {
  return (
    <div>
      {props.songs && props.songs.map((song) => (
        <Song
          title={song.title}
          artist={song.artist.name}
          artistPicture={song.artist.picture_small}
          albumTitle={song.album.title}
          albumCover={song.album.cover_small}
          key={song.id}
        />
      ))}
    </div>
  );
};

export default SongsList;
