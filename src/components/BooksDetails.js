import React,{useContext} from 'react'
import { BookContext } from '../contexts/BookContext'

export default function BooksDetails({book}) {
    const {dispatch}=useContext(BookContext)
    return (
    <li onClick={()=>dispatch({type:'REMOVE_BOOK',id:book.id})}>
        <div className='title'>{book.name}</div>
        <div className='author'>{book.writer}</div>
    </li>
)
}
