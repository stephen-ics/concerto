import React from 'react'

const accountPage = () => {
  return (
    <div className="bg-blue-950 h-full overflow-auto">
        <h1 className="text-4xl text-white mt-12">One More Step!</h1>
        <form>
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
                    className="rounded-lg p-4 text-white bg-blue-900 active:bg-blue-600 transition-all duration-75 font-bold cursor-pointer"
                    value="Submit"
                />
        </form>
    </div>  
  )
}

export default accountPage