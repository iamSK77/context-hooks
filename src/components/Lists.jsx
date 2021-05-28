import { useState } from "react";

export const Lists = () => {
    let id = 0;
    const [songs, setSongs] = useState([
        { title: "almost home", id: 1 },
        { title: "almost home", id: 2 },
        { title: "almost home", id: 3 },
    ]);

    const addSong = () => {
        setSongs([...songs, { title: "blinded by the lights", id: id }]);
    };

    return (
        <div>
            <ul>
                {songs.map((song) => (
                    <li id={song.id++}>{song.title}</li>
                ))}
            </ul>
            <br />
            <button onClick={addSong}>AddSong</button>
        </div>
    );
};
