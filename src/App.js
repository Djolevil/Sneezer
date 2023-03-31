import React, { useState } from "react";
import "./App.css";

function App() {
  const [album, setAlbum] = useState({});
  const [songs, setSongs] = useState();

  const fetchAlbumDataHandler = async () => {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/93733532"
      );
      const albumData = await response.json();

      const songsList = albumData.tracks.data.map((song) => {
        return <div>{song.title}</div>;
      });
      setAlbum(albumData);
      setSongs(songsList);
      console.log(albumData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Sneezer</h1>
      <p>Nose around that Deezer music library!</p>
      <button onClick={fetchAlbumDataHandler}>Get album data</button>
      <div>{album.title}</div>
      <div>{album.release_date}</div>
      <img src={album.cover_medium} alt="" />
      <div>{songs}</div>
    </div>
  );
}

export default App;
