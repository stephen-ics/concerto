import React from 'react';
import { useState } from 'react';
import { updateDoc, arrayUnion, collection, doc } from 'firebase/firestore';
import { firestore } from '../lib/firebase';
import { useAuthProvider } from './context/AuthContext';

const API = (relativePath) => '/api' + relativePath;

const EventSection = ({
	title = 'Unkown title',
	date = 'Unkown Date',
	artist = 'Unkown Artist',
	location = 'Unknown location',
	thumbnail,
	maxCapacity = null,
	minBid = null,
	highestBid = null,
	id,
	winningBid,
}) => {
	const { user } = useAuthProvider();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = Object.fromEntries(new FormData(event.target));

		const response = await fetch(API('/bid'), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				event: { id, winningBid },
				bid: {
					user_id: user.uid,
					...data,
				},
			}),
		});

		const responseData = await response.json();
		console.log(responseData);

		if (responseData.ok) {
			console.log('All went well');
			return;
		}
	};

	if (!user) {
		return <h1>No u</h1>;
	}

	return (
		<div className="bg-blue-950 w-full h-full flex flex-col lg:flex-row lg:gap-4 justify-center items-center">
			<img
				src={thumbnail}
				className="w-2/5 mt-10 rounded-lg max-w-[400px] lg:w-1/2 object-cover"
			></img>
			<div className="flex flex-col items-center">
				<h1 className="text-4xl text-white mt-5">{title}</h1>
				<div className="flex items-center justify-center">
					<div>
						<h2 className="text-2xl text-white m-1">{date}</h2>
						<h2 className="text-2xl text-white m-1">{artist}</h2>
						<h2 className="text-2xl text-white m-1">{location}</h2>
					</div>
					<div className="flex flex-col ml-10">
						<h2 className="text-2xl text-white m-1">
							Max Capacity: {maxCapacity || 'N/A'}
						</h2>
						<h2 className="text-2xl text-white m-1">
							Minimum Bid ${minBid || 'N/A'}
						</h2>
					</div>
				</div>
			</div>

			<form onSubmit={handleSubmit} className="flex items-end space-x-4">
				<fieldset className="flex flex-col">
					<label className="label text-white text-2xl mb-2">
						<span className="label-text">
							Highest Bid: {highestBid || 'N/A'}
						</span>
					</label>
					<input
						type="number"
						min={minBid || 0}
						name="bidAmount"
						placeholder="Place a bid..."
						className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg w-11/12"
						required
					/>
				</fieldset>
				<input
					type="submit"
					className="rounded-lg p-4 text-white bg-blue-900 active:bg-blue-600 transition-all duration-75 font-bold cursor-pointer"
					value="Submit"
				/>
			</form>
		</div>
	);
};

export default EventSection;
