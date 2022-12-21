import React, { useState} from "react";
import FotoService from './services/FotoService';
import FotoListItem from './FotoListItem';
import "./FotoList.css";


function FotoList({albumId}) {
   const[fotos,setFotos]=useState([]);
   FotoService.getOne(albumId).then(setFotos);

  return (
    <div className='fotos'> 
        
           {fotos.map((item)=>(
            <FotoListItem key={item.id} alt={item.title} url={item.thumbnailUrl}/>
           ))}
        
    </div>
  )
}

export default FotoList