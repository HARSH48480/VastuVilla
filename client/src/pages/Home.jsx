import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import Card from '../components/Card';

export default function Home() {
    const [offerListings,setOfferListings]=useState([]);
    const [saleListings,setSaleListings]=useState([]);
    const [rentListings,setRentListings]=useState([]);
    
    SwiperCore.use([Navigation])

    useEffect(()=>{

        const fetchOfferListings = async ()=>{
            try {
                
                const res = await fetch(`/api/listing/get?offer=true&limit=4`);
                const data = await res.json();
                setOfferListings(data);
                fetchRentListings();

            } catch (error) {
                console.log(error);
            }
        }

        const fetchRentListings = async()=>{
            try {
                
                const res = await fetch(`/api/listing/get?type=rent&limit=4`);
                const data = await res.json();
                setRentListings(data);
                fetchSaleListings();

            } catch (error) {
                console.log(error);
            }

        }

        const fetchSaleListings = async()=>{
            try {
                
                const res = await fetch(`/api/listing/get?type=sale&limit=4`);
                const data = await res.json();
                setSaleListings(data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchOfferListings();

    },[])
  return (
    <div>
        {   /* top */}
        <div className=" flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
            <h1 className='text-slate-800 font-bold text-3xl lg:text-6xl ' >Find your next <span className='text-slate-500'>perfect</span> 
            <br />
            place with ease
            </h1>
            <div className="text-gray-600 text-xs sm:text-lg ">
            VastuVilla Ventures is the best place to find your next perfect place to live.
            <br />
            We have a wide range of properties for you to choose from.

            </div>
            <Link to={'/search'} className=' text-xs sm:text-lg text-blue-800 font-bold hover:underline' >
                Let's get started ...
            </Link>
        </div>

        {/* swiper */ }
        <Swiper navigation>
         {
            offerListings && offerListings.length > 0 && offerListings.map((listing)=>(
                
                <SwiperSlide>
                    <div style={{background:`url(${listing.imageUrls[Math.floor(Math.random()*listing.imageUrls.length)]}) center no-repeat`, backgroundSize:'cover'}} className="h-[500px] " key={listing._id}></div>
                </SwiperSlide>

            ) )
          }
        </Swiper>
          
          


        { /* listing results for offer,sale and rent  */}
        <div className="max-w-[1500px] mx-auto p-3 flex flex-col gap-8 my-10">
            
            {
              offerListings && offerListings.length>0 && (
                <div className="">
                    <div className="m-2">
                        <h2  className='font-bold text-slate-900 text-l sm:text-xl'>Recent offers</h2>
                        <Link to={'/search?offer=true'} className='text-blue-800 hover:underline' >
                           Show more offers... 
                        </Link>
                    </div>
                    <div className="flex gap-6 flex-wrap">
                    {
                                offerListings.map((listing)=>(
                                    <Card key={listing._id} listing={listing} />
                                ))
                            }
                    </div>
                </div>
              )
            }
            
            {
              saleListings && saleListings.length>0 && (
                <div className="">
                    <div className=" m-2">
                        <h2 className='font-bold text-slate-900 text-l sm:text-xl'>Recent places for sale</h2>
                        <Link to={'/search?type=sale'} className='text-blue-800 hover:underline' > 
                            Show more offers...
                        </Link>
                    </div>
                    <div className="flex gap-6 flex-wrap">
                    {
                                saleListings.map((listing)=>(
                                    <Card key={listing._id} listing={listing} />
                                ))
                            }
                    </div>
                </div>
              )
            }
             {
              rentListings && rentListings.length>0 && (
                <div className="">
                    <div className="m-2">
                        <h2 className='font-bold text-slate-900 text-l sm:text-xl'>Recent places for rent </h2>
                        <Link to={'/search?type=rent'} className='text-blue-800 hover:underline' >
                            Show more offers...
                        </Link>
                    </div>
                    <div className="flex gap-6 flex-wrap">
                    {
                                rentListings.map((listing)=>(
                                    <Card key={listing._id} listing={listing} />
                                ))
                            }
                    </div>
                </div>
              )
            }
        </div>
    </div>
  )
}
