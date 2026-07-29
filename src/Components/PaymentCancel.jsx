import React from 'react'
import { Link } from 'react-router'

const PaymentCancel = () => {
  return (
    <div className="text-4xl font-bold">
       <h2>Payment failed. Please try again</h2>  
       <Link to='/dashboard/my-parcels'>
            <button className='btn bg-primary'>Try Again</button>
       </Link>
    </div>
  )
}

export default PaymentCancel