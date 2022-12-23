
import { useState,useEffect } from 'react';
import './App.css';
import AlbumList from './modules/albumList/AlbumList';
import PhotoList from './modules/photoList/PhotoList';
import useAlbums from './modules/hooks/useAlbums';
import usePhotos from './modules/hooks/usePhotos';

function App() {
  const [albumId,setAlbumId]=useState();
  
  const albums=useAlbums();
  const photos=usePhotos(albumId);

  useEffect(()=>{
    if(!albums.length) return;
     setAlbumId(albums[0].id);
  },[albums]);
  
  return (
    <div className="App">

      <AlbumList albums={albums} setAlbumId={setAlbumId} />
      <PhotoList photos={photos}/>
    </div>
  );
}

export default App;
