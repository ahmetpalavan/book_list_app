import React,{useContext} from 'react'
import { BookContext } from '../contexts/BookContext'

export default function Navbar() {
    const{books}=useContext(BookContext);
    
return (
    <div className='navbar'>
        <h1>Ahmet Kitap Listesi</h1>
        <p>Şuan {books.length} adet kitap bulunuyor</p>
    </div>
)
}
