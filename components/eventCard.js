import React from 'react'
import Link from 'next/link';

const eventCard = ({
    date,
    artist,
    location,
    image,
    title,
    id,
}) => {
  return (
    <Link href={`/events/${id}`}>
      <div className="w-full">
          <img src={image} alt="event thumbnail" className='w-full object-cover'/>
          <div className="bg-blue-900 p-4 text-white"> 
              <h1 className='text-3xl'>{title}</h1>
              <h2 className="text-xl">{date}</h2>
              <h1 className="text-xl">{artist}</h1>
              <h2 className="text-xl">{location}</h2>
              <button className="text-xl bg-violet-300 p-2 w-40 mt-3 rounded-full">View Tickets</button>
          </div>
      </div>
    </Link>
  )
}

export default eventCard