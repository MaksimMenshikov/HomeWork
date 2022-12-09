import './App.css'; 
import  { Component } from 'react';
import Table from '../Table/Table';

class App extends Component {
    state = {
        contacts:[
        {id: 0, name: "Max", surname: "www", email:"sss@rambler.ru"},
        {id: 1, name: "Bob", surname: "sss", email:"fggsffg@rambler.ru"},
        {id: 2, name: "Alex", surname: "sss", email:"fggsffg@rambler.ru"},
        {id: 3, name: "Smith", surname: "sss", email:"ergffg@rambler.ru"}
        ],
    };

    deleteContact = (id) => {
        this.setState({
            contacts: this.state.contacts.filter((item) => item.id !== id),
        });
    }; 
   
    createContact = (newContact) => {
        this.setState({
            contacts: [
                ...this.state.contacts,
                {
                    ...newContact,
                    id: Date.now(),
                },
            ],
        });
    };

    render() {
        return (
          <div className="container">
            <Table contacts={this.state.contacts} onDelete={this.deleteContact} onSave={this.createContact}/>
           </div>
        );
    }
}

export default App;