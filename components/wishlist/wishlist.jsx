import React from 'react'
import { useState } from 'react'
import './wishlist.css'
import {getWishlist} from '../../services/dataservice'
import { deleteWishlist } from '../../services/dataservice'
import imagewish from '../mycart/Image 11.png'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function Wishlist() {
    const [wishlistitems,setWishlistitems] = useState([])

    const GetWishlist = () => {
        getWishlist().then((response) => {
            console.log(response)
            setWishlistitems(response.data.result)
        }).catch((error) => {
            console.log(error)
        })
    }

    const removeWishlist = (data) => {
        deleteWishlist(data).then((response) => {
            console.log(response)
            GetWishlist()
        }).catch((error) => {
            console.log(error)
        })
    }

    React.useEffect(() => {GetWishlist()},[])
    

  return (
    <div className='maindiv-wish'>
        <div className='head-wish'>
            <h3 className='mywish'>My Wishlist({wishlistitems.length})</h3>
        </div>
        {
                    wishlistitems.filter((book) => book.product_id !== null).map((wishlist) =>

                    <div className='books-wish'>
                        <div className='details-wish'>
                            <img className='wish-image' src={imagewish} alt='' />
                            <div className='bookdetails-wish'>
                                <h3 className='bookname-wish'>{wishlist.product_id.bookName}</h3>
                                <p className='author-wish'>{wishlist.product_id.author}</p>
                                <h3 className='price-wish'>Rs. {wishlist.product_id.price}</h3>
                                
                            </div>
                            <DeleteOutlinedIcon  onClick={() => removeWishlist(wishlist.product_id._id)} className='remove-wish'/>
                        </div>
                        
                    </div>
            )
        }
        
    </div>
  )
}

export default Wishlist