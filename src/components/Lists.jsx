import { useState } from "react";
import { AddSongForm } from './NewSongForm';

export const Lists = () => {
    let id = 0;
    const [songs, setSongs] = useState([
        { title: "almost home", id: 1 },
        { title: "almost home", id: 2 },
        { title: "almost home", id: 3 },
    ]);

    const addSong = (title) => {
        setSongs([...songs, { title: title, id: id }]);
    };

    return (
        <div>
            <ul>
                {songs.map((song) => (
                    <li id={song.id++}>{song.title}</li>
                ))}
            </ul>
            <br />
            <br />
            <AddSongForm addSong={addSong} />
        </div>
    );
};
