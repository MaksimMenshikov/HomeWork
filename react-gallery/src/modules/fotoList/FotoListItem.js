import React from 'react'

function FotolistItem({alt,url}) {
  return (
    <div>
        <img src={url} alt={alt}/>
    </div>
  )
}

export default FotolistItem