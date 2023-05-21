import React from 'react';
import Album from './Album';

const AlbumsList = (props) => {

  const albums = props.albums[0].type === 'album' ? props.albums.map((album) => (
    <Album
      albumTitle={album.title}
      albumCover={album.cover_small}
      artist={album.artist.name}
      artistPicture={album.artist.picture_small}
      numberOfTracks={album.nb_tracks}
      key={album.id}
    />
  )) : [];

  return (
    <div>
        {albums}
    </div>
  );
};

export default AlbumsList;
