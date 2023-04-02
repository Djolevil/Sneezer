import React, { useState } from 'react';
import './App.css';
import Album from './components/Album';

const App = () => {
  const [album, setAlbum] = useState();

  const fetchAlbumDataHandler = async () => {
    try {
      const response = await fetch(
        'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/93733532'
      );
      const albumData = await response.json();

      setAlbum(albumData);
      console.log(albumData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='App'>
      <h1>Sneezer</h1>
      <p>Nose around that Deezer music library!</p>
      <button onClick={fetchAlbumDataHandler}>Get album data</button>
      {album && <Album
        title={album.title}
        releaseDate={album.release_date}
        cover={album.cover_medium}
        songs={album.tracks.data}
      />}
    </div>
  );
}

export default App;
