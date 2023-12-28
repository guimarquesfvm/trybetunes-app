import React from 'react'
import SongCard from './song-card';

function SongsList({ songs}) {
  return (
    <ul className='w-full xl:w-1/2 items-end justify-start mt-6'>
      {
        songs?.map(song => <SongCard song={song} key={song.trackId} />)
      }
    </ul>
  )
}

export default SongsList