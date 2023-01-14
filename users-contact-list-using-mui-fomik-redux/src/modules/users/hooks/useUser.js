import api from "../../../api";
import { useState, useEffect } from "react";
import { createUser,changeUser} from '../../../store/actions/users';
import { useDispatch } from 'react-redux';

const EMPTY_USER = {
  name: '',
  surname: '',
  email: '',
}

export default function useUser(id) {
      const [user, setUser] = useState(EMPTY_USER);
      const dispatch = useDispatch();

      useEffect(() => {
        if (isNaN(id)) {
          setUser(EMPTY_USER);
      } else {
        
          api.get('users/' + id)
              .then(({ data }) => setUser(data));
      }
    }, [id]);

      
    function saveUser(user) {
      if (user.id) {
           dispatch(changeUser(user)); 
      } else {
          dispatch(createUser(user));
      }
    }

    return {
      user,
      saveUser,
    };
}