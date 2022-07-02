import React from 'react'
import EventCard from './components/eventCard'

const events = () => {
  return (
    <div className="bg-blue-950 fixed w-full h-full flex flex-wrap">
        
        <EventCard 
            date="Month Day, Year"
            artist="Name"
            location="City, Country" 
        />

        <EventCard
            date="Month Day, Year"
            artist="Name"
            location="City, Country" 
        />

        <EventCard
            date="Month Day, Year"
            artist="Name"
            location="City, Country" 
        />
        



    </div>
  )
}

export default events