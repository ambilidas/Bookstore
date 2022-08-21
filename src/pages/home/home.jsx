import React, { useState } from 'react'
import './home.css'

import bookimage from './education.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import {getBooks} from '../../services/dataservice'
import Book from '../../components/books/book';

function Home() {
    const [booksArray,setBooksArray] = useState([]);

    const GetBooks = () => {
        getBooks().then((response) =>{
            console.log(response)
           setBooksArray(response.data.result);
   
       }).catch((error) => {
           console.log(error);
   
       })
    }

    React.useEffect(() => {GetBooks()}, [])

    const mapBooks = booksArray.map((book) => <Book book={book}/>)
  return (
    <div className='main-container-home'>
        <div className='header-home'>
            <div className='sub-box1-home'>
                <img className='image-book-header' src={bookimage} />
                <p className='bookstore-text'>Bookstore</p>
                <div className='white-box'>
                    <SearchOutlinedIcon className='search-icon' />
                    <input type='text' className='textbox-search' placeholder='Search...' />
                </div>
            </div>
            <div className='sub-box2-home'>
                <div className='sub-div3-home'>
                    <PersonOutlineIcon className='profile-icon'/>
                    <label className='profile-icon'>Profile</label>
                </div>
                <div className='sub-div3-home'>
                    <ShoppingCartOutlinedIcon className='profile-icon'/>
                    <label className='cart-icon'>Cart</label>
                </div>
            </div>
        </div>
        <div className='middle-container'>{mapBooks}</div>
        <div className='footer-home'>
            <p className='text-footer'>Copyright © 2020, Bookstore Private Limited. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Home