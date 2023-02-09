import React from 'react'
import SongCard from './SongCard';

const SongList = ({songs}) => {
  return (
    <div>
      {songs.map((song) => {
        return <SongCard song={song} />;
      })}
    </div>
  );
}

export default SongList