import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Contact({listing}) {
    const [landLord,setLandLord]=useState(null);
    const [message,setMessage] = useState('');
    useEffect(()=>{
       
        const fetchLandlord = async () =>{
            try {
                const res = await fetch(`/api/user/${listing.userRef}`);
                const data = await res.json();
                if(data.success === false)
                {
                    console.log(data.message);
                    return;
                }
                setLandLord(data);
                
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchLandlord();

    },[listing.userRef])

    
    console.log(message);
  return (
    <div>
        {
            landLord &&(
                <div className="text-lg flex flex-col gap-2">
                    <p>Contact <span className='font-semibold' >{landLord.username}</span> for <span className='font-semibold' >{listing.name.toLowerCase()}</span> </p>
                    <textarea name='message' id='message' rows='4' value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Enter your message here'  className='w-full text-pretty p-2 rounded-md'></textarea>

                    <Link to={`mailto:${landLord.email}?subject=Regarding${listing.name}&body${message}`}
                    className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
                    >
                    Send message
                    </Link>
                </div>
            )
        }
    </div>
  )
}
