
import React,{useState} from 'react'

function Tfoot({onSave}) {
    const [name,setName]=useState([]);
    const [surname,setSurname]=useState([]);
    const [email,setEmail]=useState([]);

   function onSaveBtnClick() {
 
        onSave({
            name: name,
            surname:surname,
            email:surname,
        }); 
        setName("");
        setSurname("");
        setEmail("");

    };

  return (
    <tfoot >
    <tr>
        <td>
            <input 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Contact name"
            />
        </td>
        <td>
            <input
                value={surname}
                onChange={(e)=>setSurname(e.target.value)}
                placeholder="Contact surname"
            />
        </td>
        <td>
            <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Contact email"
            />
        </td>
        <td><button onClick={onSaveBtnClick}>Save</button></td>
    </tr>
</tfoot>
  )
}

export default Tfoot