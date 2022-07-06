import React,{useContext} from 'react'
import { BookContext } from '../contexts/BookContext'
import BooksDetails from './BooksDetails';
export default function BookList() {
    const{books}=useContext(BookContext);
    return books.length ? (
        <div className='book-list'>
            <ul>
                {books.map(book=>{
                    return(
                        <BooksDetails book={book} key={book.id}/>
                        
                        
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className='empty'>Henüz kitap eklemediniz.</div>
    )
}
