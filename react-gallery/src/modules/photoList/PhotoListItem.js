import React from 'react'

function PhotoListItem({alt,url}) {
  return (
    <div>
        <img src={url} alt={alt}/>
    </div>
  )
}

export default PhotoListItem