import React from 'react';
import Artist from './Artist';
import classes from './ArtistsList.module.css';

const ArtistsList = (props) => {

    const artists = props.artists[0].type === 'artist' ?  props.artists.map((artist) => (
      <Artist 
          artistName={artist.name} 
          artistPicture={artist.picture_small}
          numberOfFans={artist.nb_fan}
          key={artist.id} 
      />
    )) : [];
  
    return (
      <div className={classes.container}>
          {artists}
      </div>
    );
  };

  export default ArtistsList;