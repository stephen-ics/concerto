import EventCard from '../../components/eventCard'
import { useEffect } from 'react';
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { firestore } from '../../lib/firebase'
import { useRouter } from 'next/router';

const events = () => {
    const [events, loading, error] = useCollection(collection(firestore, 'events'))
    const router = useRouter();

    useEffect(() => {
        if (error) {
            alert("Unable to load events!");
            router.push("/")
        }
    }, [events])
        

    return (
        <div className="bg-blue-950 overflow-auto h-full">
            <h1 className="text-5xl text-white m-7">Upcoming Concerts!</h1>
            <div className="grid grid-cols-responsive gap-4 w-full p-8">   
                {events && events.docs.map((event) => (
                    <EventCard {...event.data()} id={event.id} key={event.id} />
                ))}
            </div>
        </div>
    )
}

export default events