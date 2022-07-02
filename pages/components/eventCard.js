import React from 'react'

const eventCard = ({
    date,
    artist,
    location,
    image
}) => {
  return (
    <div className="w-80 h-96 bg-white mr-16 mt-10 ml-16">
        <div>
            <img src={image}/>
            <div className="bg-black p-20 text-white text-3xl flex justify-center items-center">Image</div>
            <div className="bg-blue-900 p-5">
                <div className="flex flex-col ml-5 mt-2">
                    <h2 className="text-white text-xl">{date}</h2>
                    <h1 className="text-white text-3xl">{artist}</h1>
                    <h2 className="text-white text-xl">{location}</h2>
                    <button className="text-white text-xl bg-violet-300 p-2 w-40 mt-3 rounded-full">View Tickets</button>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default eventCard