import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'

const ReviewCard = ({reviewCard}) => {
    
    console.log(reviewCard)
    const {user_photoURL,userName,review} = reviewCard
  return (
    <div className="mx-auto w-105 bg-base-100 rounded-[30px] p-10 shadow-sm border border-base-300">
          
          {/* Quote */}
         <FaQuoteRight className='text-[#C3DFE2] text-2xl mb-4 opacity-70'></FaQuoteRight>

          {/* Description */}
          <p className="text-[#606060] text-lg leading-9 border-b border-dashed border-primary pb-8">
            {review}
          </p>

          {/* User Info */}
          <div className="flex items-center gap-4 pt-8">
            <div className="w-16 h-16 rounded-full">
                <img className='w-full h-full rounded-full' src={user_photoURL} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#003B3B]">
                {userName}
              </h2>

              <p className="text-gray-500 text-lg">
                Senior Product Designer
              </p>
            </div>
          </div>
        </div>
  )
}

export default ReviewCard