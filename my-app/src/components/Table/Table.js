import './Table.css'

import React, { Component } from 'react'
import Thead from './Thead/Thead'
import Tbody from './Tbody/Tbody'
import Tfoot from './Tfoot/Tfoot'
export class Table extends Component {
  render() {
    return (
        <table className="table">
            <Thead/>
            <Tbody contacts={this.props.contacts} onDelete={this.props.onDelete}/>
            <Tfoot onSave={this.props.onSave} />
        </table>
    )
  }
}

export default Table