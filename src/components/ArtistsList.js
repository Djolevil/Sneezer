import React from 'react';
import Artist from './Artist';

const ArtistsList = (props) => {

    const artists = props.artists.map((artist) => (
      <Artist 
          artistName={artist.name} 
          artistPicture={artist.picture_small}
          numberOfFans={artist.nb_fan}
          key={artist.id} 
      />
    ));
  
    return (
      <div>
          {artists}
      </div>
    );
  };

  export default ArtistsList;