
import { useState } from 'react';
import './App.css';
import AlbumList from './modules/albumList/AlbumList';
import FotoList from './modules/fotoList/FotoList';

function App() {
  const [albumId,setAlbumId]=useState([])
  
  function firstFotoAlbum(id){
      setAlbumId(id); 
  }

  return (
    <div className="App">

      <AlbumList setAlbumId={setAlbumId} firstFotoAlbum={firstFotoAlbum}/>
      <FotoList albumId={albumId}/>
    </div>
  );
}

export default App;
