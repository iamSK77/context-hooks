import React, { useState } from 'react';

export const AddSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        addSong(title);
        setTitle('');
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>Song name:</label>
            <input type="text" name="name" id="name" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="submit" value="Add" />
        </form>
    );
};
