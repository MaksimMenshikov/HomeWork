import React from 'react'
import './AlbumListItem.css'


function AlbumListItem({album,setAlbumId}) {
  
  function getTargetAlbumId(){
    setAlbumId(album.id);
  }
  return (
    <li className={'album-item'} onClick={getTargetAlbumId}>{album.title}</li>
  )
}

export default AlbumListItem