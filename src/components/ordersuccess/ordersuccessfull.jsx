import React from 'react'
import './ordersucessfull.css'
import image from './Orderplacedsuccessfully.png'
import {Link} from 'react-router-dom'
import Footer from '../footer/footer'
import Header from '../header/header'

function Ordersuccessfull() {


  return (
   
    <div>  
        <Header />    
        <div className='maindiv-ordersuccess'>
            <img className='image-ordersuccess' src={image} alt='' />
            <p className='para-ordersuc'>hurray!!! your order is confirmed<br/> the order id is #123456 save the order id for <br/>further communication..</p>
            <div className='table-ordrsuc'>
                <div className='fstrow-table' >
                    <p className='tablehead'>Email us</p>
                    <p className='tablehead'>Contact us</p>
                    <p className='tablehead'>Address</p>
                </div>
                <div className='scndrow-table'>
                    <div className='column'>admin@bookstore.com</div>
                    <div className='column'>+91 8163475881</div>
                    <div className='column'><p className='address-para'>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant,
                        HSR Layout, Bangalore 560034</p></div>
                </div>
            </div>
            <Link to='/Home'>
            <button className='conti-shop'>CONTINUE SHOPPING</button>
            </Link>
            
        </div>
        <Footer />
    </div>  
  )
}

export default Ordersuccessfull