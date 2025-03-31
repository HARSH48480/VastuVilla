import React from 'react'
import { Link } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'

export default function Card({index,listing}) {
  return (
    <div className='bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg w-full sm:w-[333px]'>
        
        <Link to={`/listing/${listing._id}`} >
        <img src={listing.imageUrls[Math.floor(Math.random()*listing.imageUrls.length)] } alt="" 
        className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className="p-3 flex flex-col gap-2 w-full">
           <p className='truncate text-lg font-semibold text-slate-800' > {listing.name}</p>
           <div className='flex items-center gap-1'>
              <MdLocationOn className='h-4 w-4 text-green-800' />
              <p className='truncate text-sm text-gray-600 w-full' >{listing.address}</p>
              
           </div>
           <p className='text-sm text-gray-600 line-clamp-3' >{listing.description}</p>
           <p className='text-slate-500 mt-2 font-semibold ' >
           ₹{ 
                listing.offer ? listing.discountPrice.toLocaleString('en-US') : listing.regularPrice.toLocaleString('en-US')  
            }
            {
                listing.type ==='rent' && ' / month'
            }
           </p>
           <div className=" text-slate-900 flex gap-4 ">
            <div className="font-bold text-sm ">
                {
                    listing.bedrooms > 1 ? `${listing.bedrooms} beds`: `${listing.bedrooms} bed` 
                }
            </div>
            <div className="font-bold text-sm ">
                {
                    listing.bathrooms > 1 ? `${listing.bathrooms} baths`: `${listing.bathrooms} bath` 
                }
            </div>
           </div>
        </div>
        </Link>

    </div>
  )
}
