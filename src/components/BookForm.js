import React,{useState,useContext} from 'react'
import { BookContext } from '../contexts/BookContext'

export default function BookForm({book}) {
    const {dispatch}=useContext(BookContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log('title,author');
        dispatch({type:'ADD_BOOK',book:{name:title,writer:author}})
        setTitle('')
        setAuthor('')
    }   
return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Kitap Adı" value={title} onChange={(e=>setTitle(e.target.value))}/>
        <input type='text' placeholder="Yazar Adı" value={author} onChange={(e=>setAuthor(e.target.value))}/>
        <input type='submit' value="Kitap Ekle"/>
    </form>
)
}
