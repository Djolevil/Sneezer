import React from 'react';
import Song from './Song';

const SongsList = (props) => {
    if(props.songs) {
        props.songs.map((song) => {
            return <Song title={song.title} />;
        })
    }
    return;
}

export default SongsList;