import React from 'react'
import Trow from '../Trow/Trow'


function Tbody({contacts,onDelete}) {
  return (
    <tbody >
    {contacts.map((item) => (
    <Trow key={item.id} row={item} onDelete={onDelete}/>
    ))}
    </tbody>
  )
}

export default Tbody