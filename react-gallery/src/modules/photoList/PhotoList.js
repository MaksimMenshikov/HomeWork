import React from 'react';
import PhotoListItem from './PhotoListItem';
import "./PhotoList.css";


function PhotoList({photos}) {
 
  return (
    <div className='photos'> 
        
           {photos.map((item)=>(
            <PhotoListItem key={item.id} alt={item.title} url={item.thumbnailUrl}/>
           ))}
        
    </div>
  )
}

export default PhotoList