import React from 'react';
import Song from './Song';

const SongsList = (props) => {
    return (
        <div>
        {props.songs.map((song) => (<Song title={song.title} key={song.id}/>))}
        </div>
    );
}

export default SongsList;

