import React from 'react';

const Artist = (props) => {
    return (
        <div>
            <span>
                {props.artistName}
            </span>
            <span>
               <img src={props.artistPicture} alt='' />
            </span>
            <span>
                {props.numberOfFans}
            </span>
        </div>
    );
};

export default Artist;