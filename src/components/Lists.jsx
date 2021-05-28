import { useState } from 'react';

export const List = () => {
    let id = 0;
    const [songs, setSongs] = useState([{ title: 'almost home', id: 1 },
    { title: 'almost home', id: 1 },
    { title: 'almost home', id: 1 },]);

    const addSong = () => {
        setSongs([...songs, { title: 'blinded by the lights', id:  }])
    }

    return (
        <div>

        </div>
    );
};
