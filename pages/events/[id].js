import { useRouter } from 'next/router'
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../lib/firebase';
import EventSection from "../../components/eventSection"

const Event = ({ eventData, id }) => {
    const router = useRouter();

    // Subscribe to event 

    return (
        <EventSection {...eventData} />
    )
}

export async function getStaticProps(context) {
    // Get document data
    const { id } = context.params;

    const eventData = (await getDoc(doc(firestore, 'events', id))).data();

    console.log("Event data:", eventData);

    if (!eventData) {
        console.warn("No such event exists, returning 404...");
        return {
            notFound: true
        }
    }

    // Pass to props
    
    return {
        props: {
            eventData,
            id
        },
        revalidate: 1
    }
}

export async function getStaticPaths() {
    const events = await getDocs(collection(firestore, "events"))
    console.log("All events:", events)

    let paths = []
    events.forEach(obj => paths.push({
        params: {
            id: obj.id
        }
    }));

    return {
        paths,
        fallback: "blocking"
    }
}

export default Event;