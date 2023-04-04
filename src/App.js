import React, { useState } from 'react';
import './App.css';
import Album from './components/Album';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  const [album, setAlbum] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchAlbumDataHandler = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/93733532'
      );
      const albumData = await response.json();

      setAlbum(albumData);
      setIsLoading(false);
      console.log(albumData);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className='App'>
      <h1>Sneezer</h1>
      <p>Nose around that Deezer music library!</p>
      <button onClick={fetchAlbumDataHandler} disabled={isLoading}>Get album data</button>
      {isLoading && <LoadingSpinner />}
      {!isLoading && album && <Album
        title={album.title}
        releaseDate={album.release_date}
        cover={album.cover_medium}
        songs={album.tracks.data}
      />}
    </div>
  );
}

export default App;
