import './Table.css'
import React from 'react'


import Thead from './Thead/Thead'
import Tbody from './Tbody/Tbody'
import Tfoot from './Tfoot/Tfoot'



function Table({contacts,onDelete,onSave}) {
  return (
    <table className="table">
            <Thead/>
            <Tbody contacts={contacts} onDelete={onDelete}/>
            <Tfoot onSave={onSave} />
        </table>
  )
}
export default Table
