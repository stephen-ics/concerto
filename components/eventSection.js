import React from 'react'
import { useState } from 'react'
import { updateDoc, collection, doc} from 'firebase/firestore'
import { firestore } from '../lib/firebase'
import { useAuthProvider } from './context/AuthContext'

const eventSection = ({ title, date, artist, location, image, highestBid }) => {
  const { user } = useAuthProvider();  
  
  const handleSubmit = async (event) => {   
        event.preventDefault();  
        const data = Object.fromEntries(new FormData(event.target));
        console.log(data)
        const userPath = doc(firestore, "userInfo", user.uid)
        const document = await updateDoc(userPath, {
            bid: data
        })
        console.log(document)
  }

  if (!user) {
    return <h1>No  u</h1>
  }

  return (
    <div className="bg-blue-950 w-full h-full flex flex-col justify-center items-center">
      <img src="concert.webp" className="w-2/5 mt-10"></img>
      <h1 className="text-4xl text-white m-5">Ticket to Title by Artist</h1>
      <h2 className="text-2xl text-white m-1">Date</h2>
      <h2 className="text-2xl text-white m-1">Location</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col my-4">
            <label className="label mb-2 text-white text-2xl">
            <span className="label-text">Highest Bid: Number</span>
            </label>
            <input
            type="text"
            name="Bid"
            placeholder="Place a bid..."
            className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
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
  )
}

export default eventSection