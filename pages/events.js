import EventCard from '../components/eventCard'

const events = () => {
    
  return (
    <div className="bg-blue-950 fixed w-full h-full">
        <h1 className="text-5xl text-white m-7">Upcoming Concerts!</h1>
        <div className="flex flex-wrap">   
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
    </div>
  )
}

export default events