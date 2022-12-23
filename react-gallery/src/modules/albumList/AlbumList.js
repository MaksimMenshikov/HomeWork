import React, { useEffect, useState } from 'react'
import './AlbumList.css'
import AlbumListItem from './AlbumListItem';


 

function AlbumList({albums,setAlbumId}) {
 
  return (
    <div className='albumList'> 
        <ul>
           {albums.map((item)=>(
            <AlbumListItem key={item.id} album={item} setAlbumId={setAlbumId}  />
           ))}
        </ul>
    </div>
  )
}

export default AlbumList