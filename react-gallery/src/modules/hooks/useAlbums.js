import  { useEffect, useState } from 'react'
import AlbumService from '../albumList/services/AlbumService';

export default function useAlbums() {
    const[albums,setAlbums]=useState([]);
    useEffect(()=>{
        AlbumService.getList().then((data)=>setAlbums(data))
    },[])
    return albums;
}
  
