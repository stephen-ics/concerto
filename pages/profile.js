import React from 'react'
import { useState } from 'react';
import { addDoc, collection, doc } from 'firebase/firestore'
import { firestore } from '../lib/firebase'
import { useAuthProvider } from '../components/context/AuthContext'

const accountPage = () => {

    const { user } = useAuthProvider();

    const handleSubmit = async e => {
        e.preventDefault();

        const info = {
            ...Object.fromEntries(new FormData(e.target)),
            bids: [],
        };

        console.log(info)
        const document = await addDoc(doc(firestore, "userInfo", user.uid), info)
        console.log(document)
    }

    return (
        <div className="bg-blue-950 h-full overflow-auto">
            <h1 className="text-4xl text-white mt-12">Set Up Your Account</h1>
            <form onSubmit={handleSubmit}>
                <fieldset className="flex flex-col my-10">
                    <label className="label mb-2 text-white text-2xl">
                        <span className="label-text">First Name</span>
                    </label>
                    <input
                        type="text"
                        name="FirstName"
                        placeholder="First Name..."
                        className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
                        required
                    />
                </fieldset>
                <fieldset className="flex flex-col my-10">
                    <label className="label mb-2 text-white text-2xl">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input
                        type="text"
                        name="LastName"
                        placeholder="Last Name..."
                        className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
                        required
                    />
                </fieldset>
                <fieldset className="flex flex-col my-10">
                    <label className="label mb-2 text-white text-2xl">
                        <span className="label-text">Username</span>
                    </label>
                    <input
                        type="text"
                        name="Username"
                        placeholder="Username..."
                        className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
                        required
                    />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label className="label mb-2 text-white text-2xl">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input
                        type="text"
                        name="PhoneNumber"
                        placeholder="Phone Number..."
                        className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
                        required
                    />
                </fieldset>
                <input
                    type="submit"
                    className="w-full my-7 rounded-lg p-4 text-white bg-blue-900 active:bg-blue-600 transition-all duration-75 font-bold cursor-pointer"
                    value="Submit"
                />
            </form>
        </div>
    )
}

export default accountPage