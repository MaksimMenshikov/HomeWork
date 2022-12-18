import './Thead.css'
import React  from 'react'

function Thead() {
  return (
    <thead className='thead'>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
    </thead>
  )
}

export default Thead