import client from '../../lib/sms';

export default async function handler(request, response) {
	const sms = await client.messages.create({
		to: '+16476764995',
		from: '+18454426195',
		body: 'Hello there!',
	});

	console.log(sms);
	response.status(200).json({ sms });
}
