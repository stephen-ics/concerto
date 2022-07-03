// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { firestore } from '../../lib/firebase';
import { getDoc, doc, updateDoc, addDoc, collection } from 'firebase/firestore';
import client from '../../lib/sms';

export default async function handler(request, response) {
	const { event, bid } = request.body;

	if (!event.winningBid) {
		const newWinningBid = await addDoc(collection(firestore, 'bids'), bid);

		await updateDoc(doc(firestore, 'events', event.id), {
			winningBid: newWinningBid.id,
		});

		response.status(200).json({ message: 'Overbid Successful' });
		return;
	}

	const winningBidData = (
		await getDoc(doc(firestore, 'bids', event.winningBid))
	).data();

	console.log('winning bid', winningBidData);

	if (!(bid.bidAmount > winningBidData.bidAmount)) {
		response.status(409).json({
			message: 'This bid doesnt compete with the winning bid!',
		});
		return;
	}

	await client.messages.create({
		to: '+16475012335',
		from: '+18454426195',
		body: `You got outbid on the ${event.title} event! Make sure to get your ticket!`,
	});

	const newWinningBid = await addDoc(collection(firestore, 'bids'), bid);

	await updateDoc(doc(firestore, 'events', event.id), {
		winningBid: newWinningBid.id,
	});

	response.status(200).json({ message: 'Overbid Successful' });
}
