import React, { useState } from 'react'
import './home.css'

import bookimage from './education.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import {getBooks} from '../../services/dataservice'
import Book from '../../components/books/book';
import Bookdetail from '../../components/bookdetails/bookdetail';
import Cartpage from '../../components/mycart/cartpage';
import Footer from '../../components/footer/footer';

function Home() {
    const [booksArray,setBooksArray] = useState([]);
    const [booklist,setBooklist] = React.useState("");
    const [switchBookDetails,setSwitchBookDetails] = useState(false);
    

    const GetBooks = () => {
        getBooks().then((response) => {
            console.log(response)
           setBooksArray(response.data.result);
   
       }).catch((error) => {
           console.log(error);
   
       })
    }
    const listenToBookDetails = (data) => {
        
        setSwitchBookDetails(true)
    }
    const listenToBookList = (data) => {
        setBooklist(data)
    }

    React.useEffect(() => {GetBooks()},[])

    
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
        {/* <div className='books-div'>
            <h3>Books</h3>
            <select>
                <option>Sort by relevence</option>
                <option>price:high to low</option>
                <option>price:low to high</option>
            </select>
        </div> */}
        
        {/* <div className='middle-container'>
            {
                switchBookDetails ? <Bookdetail booklist={booklist}/> : booksArray.map((book) => <Book book={book} listenToBookDetails={listenToBookDetails} listenToBookList={listenToBookList}/>)
            }
            
           
        </div> */}
       
        <Cartpage />

        <Footer />
    </div>
  )
}

export default Home