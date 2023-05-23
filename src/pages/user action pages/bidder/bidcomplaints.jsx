import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Avatar } from 'evergreen-ui'
import {BsArrowLeft} from 'react-icons/bs'
import { useState ,useEffect} from "react";
const BidComplaints=()=>{
    const {id,uid}=useParams();

    return(
        <div className="container border rounded" style={{minHeight:'20rem',height:"auto"}} >
        <div className="p-2 w-100 fluid" style={{minHeight:'2rem'}}>
           <a className="icon-link text-decoration-none text-black">
            <BsArrowLeft className='me-2' />
            <Link className="text-decoration-none" to={`/userpage/supplier/${id}`}>Back to Manage Bids</Link>
           </a>
        </div>
        
    </div>)
}

export default BidComplaints;