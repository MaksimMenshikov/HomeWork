import {
    DELETE_USER,
    PUSH_USER,
    SET_IS_LOADING,
    SET_USERS,
    UPDATE_USER,
} from '../actions/users';

const INITIAL_STATE = {
    isLoading: false,
    list: [],
}


export default function usersReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case SET_IS_LOADING:
            return { ...state, isLoading: payload };
        case DELETE_USER:
            return {
                ...state,
                list: state.list.filter((item) => payload !== item.id),
            };
      
        case UPDATE_USER:
            return {
                ...state,
                list: state.list.map((item) =>
                    item.id === payload.id ? payload : item
                ),
            };
        case PUSH_USER:
            return {
                ...state,
                list: [...state.list, payload],
            };

        case SET_USERS:
            return {
                ...state,
                list: payload,
            };
        default:
            return state;
    }
}