// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { firestore } from '../../lib/firebase';
import { getDoc, doc } from 'firebase/firestore';

export default async function handler(request, response) {
	const { event, bid } = request.body;

	const winningBidData = await getDoc(
		doc(firestore, 'bids', event.winningBid)
	);

	console.log('winning bid', winningBidData);

	if (!Number(bid.bidAmount) > winningBidData.bidAmount) {
		response
			.status(409)
			.json({ message: 'This bid doesnt compete with the winning bid!' });
		return;
	}

	response
		.status(200)
		.json({ message: `${bid.bidAmount} > ${winningBidData.bidAmount}` });
}
