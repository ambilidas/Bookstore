import React, { useState } from 'react'
import './home.css'


import {getBooks} from '../../services/dataservice'
import Book from '../../components/books/book';
import Bookdetail from '../../components/bookdetails/bookdetail';
import Cartpage from '../../components/mycart/cartpage';
import Wishlist from '../../components/wishlist/wishlist';
import Footer from '../../components/footer/footer';
import Ordersuccessfull from '../../components/ordersuccess/ordersuccessfull';
import Header from '../../components/header/header';
import Pagination from '@mui/material/Pagination';

function Home() {
    const [booksArray,setBooksArray] = useState([]);
    const [booklist,setBooklist] = React.useState("");
    const [switchBookDetails,setSwitchBookDetails] = useState(false);
    // const [switchToHome,setSwitchToHome] = useState(false);
    const [page,setPage] = useState(1);

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
    const listentopage =(e,v) => {
        
        setPage(v)
    }

    // const listenToContinueshopping = () => {
    //     setSwitchToHome(true)
    // }

    React.useEffect(() => {GetBooks()},[])

    
  return (
    <div className='main-container-home'>
        
       <Header />
        <div className='books-div'>
            <h3>Books</h3>
            <select>
                <option>Sort by relevence</option>
                <option>price:high to low</option>
                <option>price:low to high</option>
            </select>
        </div> 
        
       
         <div className='middle-container'>
            {
                switchBookDetails ? <Bookdetail booklist={booklist}/> : booksArray.map((book) => <Book book={book} listenToBookDetails={listenToBookDetails} listenToBookList={listenToBookList}/>)
            }
        </div>

               
        {/* <Cartpage /> */}
        {/* <Wishlist /> */}
        <div className='pagination'>
        <Pagination  onChange={listentopage}  count={10} page={page} />
        </div>
        <Footer />
    </div>
  )
}

export default Home