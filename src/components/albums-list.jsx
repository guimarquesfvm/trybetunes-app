import React from 'react'
import AlbumCard from './album-card'

function AlbumsList({ albums }) {
  return (
    <div className='h-full w-full flex flex-wrap gap-6 justify-center mt-4'>
      {
        albums?.map(album => (
          <AlbumCard key={album.collectionId} album={album} />
        ))
      }
    </div>
  )
}

export default AlbumsList