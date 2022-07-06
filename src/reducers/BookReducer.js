import {v4 as uuidv4} from 'uuid';

export const BookReducer=(state,action)=>{

    switch (action.type) {
        case 'ADD_BOOK':
            
        return[...state,{
            name:action.book.name,
            writer:action.book.writer,
            id:uuidv4()
        }]
        case 'REMOVE_BOOK':
            return state.filter(book=>book.id !== action.id);
        default:
            return state;
    }
}