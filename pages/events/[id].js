import { useRouter } from 'next/router';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { firestore } from '../../lib/firebase';
import EventSection from '../../components/eventSection';

const Event = ({ startingEventData, id }) => {
	const router = useRouter();

	// Subscribe to event for new bids
	const [value, loading, error, snapshot] = useDocumentData(
		doc(firestore, 'events', id)
	);

	const eventData = loading ? startingEventData : value;

	console.log('Using client side data?', !loading);
	console.log('Event data:', eventData);

	return <EventSection {...eventData} id={id} />;
};

export async function getStaticProps(context) {
	// Get document data
	const { id } = context.params;

	const eventData = (await getDoc(doc(firestore, 'events', id))).data();

	if (!eventData) {
		console.warn('No such event exists, returning 404...');
		return {
			notFound: true,
		};
	}

	// Pass to props

	return {
		props: {
			id,
			eventData,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	const events = await getDocs(collection(firestore, 'events'));

	let paths = [];
	events.forEach((obj) =>
		paths.push({
			params: {
				id: obj.id,
			},
		})
	);

	return {
		paths,
		fallback: 'blocking',
	};
}

export default Event;
