import React from 'react';
import { useState } from 'react';
import { addDoc, collection, deleteDoc, updateDoc } from 'firebase/firestore';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { firestore, storage } from '../lib/firebase';
import { FaImage } from 'react-icons/fa';

const compose = () => {
	const handleSubmit = async (event) => {
		event.preventDefault();
		const { eventImage, ...documentData } = Object.fromEntries(
			new FormData(event.target)
		);

		const document = await addDoc(collection(firestore, 'events'), {
			...documentData,
			winningBid: '',
		});

		const imageRef = ref(storage, `event-thumbnails/${document.id}`); // Janky file uploads
		await uploadBytes(imageRef, eventImage);

		let imageUrl;

		try {
			imageUrl = await getDownloadURL(imageRef);
		} catch (error) {
			deleteDoc(document);
			return;
		}

		await updateDoc(document, {
			thumbnail: imageUrl,
		});

		console.log(document);
	};

	const [imageCount, setImageCount] = useState(0);

	return (
		<div className="bg-blue-950 h-full overflow-auto">
			<h1 className="text-4xl text-white mt-12 text-center">
				Host Your Own Concert!
			</h1>
			<form onSubmit={handleSubmit} className="m-auto max-w-[800px]">
				<fieldset className="flex flex-col my-4">
					<label className="label mb-2 text-white text-2xl">
						<span className="label-text">Concert Name</span>
					</label>
					<input
						type="text"
						name="title"
						placeholder="Concert Name..."
						className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
						required
					/>
				</fieldset>

				<fieldset className="flex flex-col my-4">
					<label className="label mb-2 text-white text-2xl">
						<span className="label-text">Date</span>
					</label>
					<input
						type="text"
						name="date"
						placeholder="Day/Month/Year..."
						className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
						required
					/>
				</fieldset>

				<fieldset className="flex flex-col my-4">
					<label className="label mb-2 text-white text-2xl">
						<span className="label-text">Artist</span>
					</label>
					<input
						type="text"
						name="artist"
						placeholder="Artist..."
						className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
						required
					/>
				</fieldset>

				<fieldset className="flex flex-col my-4">
					<label className="label mb-2 text-white text-2xl">
						<span className="label-text">Location</span>
					</label>
					<input
						type="text"
						name="location"
						placeholder="Location..."
						className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
						required
					/>
				</fieldset>

				<fieldset className="flex flex-col my-4">
					<label className="label mb-2 text-white text-2xl">
						<span className="label-text">Max Capacity</span>
					</label>
					<input
						type="text"
						name="maxCapacity"
						placeholder="Max Capapcity..."
						className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
						required
					/>
				</fieldset>

				<fieldset className="flex flex-col my-4">
					<label className="label mb-2 text-white text-2xl">
						<span className="label-text">Minimum Bid</span>
					</label>
					<input
						type="text"
						name="minBid"
						placeholder="Minimum Bidding Price..."
						className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
						required
					/>
				</fieldset>

				<fieldset className="flex flex-col">
					<label className="label mb-2">
						<span className="label-text text-2xl text-white">
							Concert Thumbnail
						</span>
					</label>
					<input
						type="file"
						id="file"
						accept="image/png, image/jpeg"
						name="eventImage"
						className="hidden"
						onChange={(e) => setImageCount(e.target.files.length)}
						required
					/>
					<label
						htmlFor="file"
						className="bg-blue-700 p-4 border rounded w-full text-center border-blue-400 cursor-pointer text-white text-l flex flex-wrap justify-center items-center hover:bg-blue-600"
					>
						<FaImage className="mr-2" />
						{imageCount === 0 ? 'Upload Photos' : '1 image'}
					</label>
				</fieldset>

				<input
					type="submit"
					className="w-full my-5 rounded-lg p-4 text-white bg-blue-900 hover:bg-blue-800 active:bg-blue-600 transition-all duration-75 font-bold cursor-pointer"
					value="Submit"
				/>
			</form>
		</div>
	);
};

export default compose;
