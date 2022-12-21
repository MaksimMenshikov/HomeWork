import React, { useEffect, useState } from 'react'
import './AlbumList.css'
import AlbumListItem from './AlbumListItem';
import AlbumService from './services/AlbumService';

 

function AlbumList({setAlbumId,firstFotoAlbum}) {
    const[albums,setAlbums]=useState([]);
    useEffect(()=>{
        AlbumService.getList().then((data)=>{setAlbums(data);
          firstFotoAlbum(data[0].id)})    
    },[])
  
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