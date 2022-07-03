import EventCard from '../../components/eventCard';
import { useEffect } from 'react';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '../../lib/firebase';
import { useRouter } from 'next/router';
import { AiOutlineReload } from 'react-icons/ai';

const events = () => {
	const [events, error] = useCollection(collection(firestore, 'events'));
	const router = useRouter();

	useEffect(() => {
		if (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className="bg-blue-950 overflow-auto h-full">
			<h1 className="text-5xl text-white m-7 text-center">
				Upcoming Concerts!
			</h1>
			<div className="grid grid-cols-responsive auto-rows-[1fr] gap-4 w-full p-8">
				{events ? (
					events.docs.map((event) => (
						<EventCard
							{...event.data()}
							id={event.id}
							key={event.id}
						/>
					))
				) : (
					<AiOutlineReload
						size={128}
						color="white"
						className="animate-spin m-auto"
					/>
				)}
			</div>
		</div>
	);
};

export default events;
