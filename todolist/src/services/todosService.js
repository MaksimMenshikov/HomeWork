const TODOS_URL='https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/';

export function getTodos(){
    return  fetch(TODOS_URL).then((res)=>res.json())
}

export function delTodo(id){
    return  fetch(TODOS_URL+id,{
        method:'DELETE',
    }).then((res)=>res.json())
}
export function createNewTodo(newTodo){
    return  fetch(TODOS_URL,{
        method:'POST',
        body:JSON.stringify(newTodo),
        headers:{
            'Content-Type':'application/json',
        },
    }).then((res)=>res.json())
}

export function updateTodo(todo){
    return  fetch(TODOS_URL+todo.id,{
        method:'PUT',
        body:JSON.stringify(todo),
        headers:{
            'Content-Type':'application/json',
        },
    }).then((res)=>res.json())
}
