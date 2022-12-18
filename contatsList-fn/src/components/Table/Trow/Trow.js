import React from 'react'
import './Trow.css'

function Trow({row,onDelete}) {
  return (
    <tr className='trow' >
    <td className='td'>{row.name}</td>
    <td className='td'>{row.surname}</td>
    <td className='td'>{row.email}</td>
    <td className='td'> <button onClick={() => onDelete(row.id)}>Delete</button> </td>
    
</tr>
  )
}

export default Trow