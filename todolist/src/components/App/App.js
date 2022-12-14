import './App.css';

import { Component } from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import { getTodos } from '../../services/todosService';
import { delTodo } from '../../services/todosService';
import { createNewTodo } from '../../services/todosService';
import { updateTodo } from '../../services/todosService';

class App extends Component {
    state = {
        todos: [],
    };

    toggleTodo = (id) => {
        const todo = this.state.todos.find((item) => item.id === id);
        updateTodo({ ...todo, isDone: !todo.isDone }).then((data) => {
            this.setState({
                todos: this.state.todos.map((item) =>
                    item.id !== id ? item : data
                ),
            });
        });
    };

    deleteTodo = (id) => {
        delTodo(id).then(()=>{
            this.setState({
                todos: this.state.todos.filter((item) => item.id !== id),
            });
        })
        
    };

    createTodo = (newTodo) => {
        createNewTodo(newTodo).then((data)=>{
            this.setState({
                todos: [
                    ...this.state.todos,data  
                ],
            });

        })
       
    };

    render() {
        return (
            <>
                <List
                    todos={this.state.todos}
                    onToggle={this.toggleTodo}
                    onDelete={this.deleteTodo}
                />
                <Form onSave={this.createTodo} />
            </>
        );
    }
    componentDidMount(){
        getTodos().then ((data)=>
            this.setState({
                todos:data,
            }));
    }
}

export default App;



