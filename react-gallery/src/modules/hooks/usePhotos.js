import  { useEffect, useState } from 'react'
import FotoService from '../photoList/services/PhotoService'

export default function usePhotos(albumId) {
    const[photos,setPhotos]=useState([]);
    
    useEffect(() => {
        if (!albumId) return;
        FotoService.getOne(albumId).then(setPhotos);
    }, [albumId]);


  return photos
   
  
}
