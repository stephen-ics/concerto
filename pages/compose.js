import React from 'react'

const accountPage = () => {
  return (
    <div className="bg-blue-950 h-full overflow-auto">
        <h1 className="text-4xl text-white mt-12">Host Your Own Concert!</h1>
        <form>
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
                    name="Date"
                    placeholder="Day/Month/Year..."
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
                    name="Location"
                    placeholder="Location..."
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

export default accountPage