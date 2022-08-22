import React from 'react'
import './bookdetail.css'
import bookimage from '../books/bookimg.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function Bookdetail(props) {
  console.log(props.booklist);
  return (
    <div className='main-block-details'>
      <div className='sub-block1-details'>
        <div className='image-block-details'>
            <img className='bookimage-details' src={bookimage}/>
         </div>  
          <div className='button-cart-wishlist'>
              <button className='btn-addtobag'><span className='addtobag'>ADD TO BAG</span></button>
              <button className='btn-wishlist'><FavoriteBorderIcon className='fav-icon'/><span className='wishlist'>WISHLIST</span></button>
          </div>
      </div>
       <div className='sub-block2-details'>
          <h2 className='book-name-details'>{props.booklist.bookName}</h2>
          <p className='author'>{props.booklist.author}</p>
          <p className='rating-details'>4.5 *</p>
          <h2 className='price-details'>Rs.{props.booklist.price}</h2>
          <div>
            <p className='para-heading'>Book Detail</p>
            <p className='para-details'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            Lorem ipsum dolor sit amet, consetetur sadipscing 
            </p>
          </div>
          <div><h3 className='customer-feedback'>Customer Feedback</h3></div>
          <div className='overall-rating-box'>
            <p className='text-overallrating'>Overall rating</p>
            <div className='staricon-div'>
              <StarOutlineIcon className='starIcon'/>
              <StarOutlineIcon className='starIcon'/>
              <StarOutlineIcon className='starIcon'/>
              <StarOutlineIcon className='starIcon'/>
              <StarOutlineIcon className='starIcon'/>
            </div>
            <div className='whitebox-textfield'>
              <input className='textfield-review' type='text' placeholder='Write your review'/>
            </div>
            <button className='btn-submit-details'>Submit</button>
          </div>
          <div className='review-box1'>
              <p className='first-review'><span className='first-review-person'>AC</span></p>
              <div className='subdiv-review-details'>
                  <p className='custmr-name'>Aniket Chile</p>
                  <div className='staricon-subdiv'>
                    <StarOutlineIcon className='staricon-yellow'/>
                    <StarOutlineIcon className='staricon-yellow'/>
                    <StarOutlineIcon className='staricon-yellow'/>
                    <StarOutlineIcon className='starIcon'/>
                    <StarOutlineIcon className='starIcon'/>
                  </div>
                  <p className='review-para'>Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct.</p>
              </div>
          </div>
          <div className='review-box2'>
          <p className='first-review'><span className='first-review-person'>SB</span></p>
              <div className='subdiv-review-details'>
                  <p className='custmr-name'>ShwetaBodkar</p>
                  <div className='staricon-subdiv'>
                    <StarOutlineIcon className='staricon-yellow'/>
                    <StarOutlineIcon className='staricon-yellow'/>
                    <StarOutlineIcon className='staricon-yellow'/>
                    <StarOutlineIcon className='staricon-yellow'/>
                    <StarOutlineIcon className='starIcon'/>
                  </div>
                  <p className='review-para'>Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct.</p>
              </div>
          </div>
       </div>
        
    </div>
  )
}

export default Bookdetail