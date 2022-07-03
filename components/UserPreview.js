import { useAuthProvider } from './context/AuthContext'

const UserPreview = ({ displayName, photoURL }) => {
   
    const { logout } = useAuthProvider();

    return (
        <div className='flex items-center space-x-4'>
            <div>
                <h3 className='text-base'>{displayName}</h3>
                <button onClick={logout} className='bg-zinc-800 text-zinc-200 rounded-full text-sm px-2'>logout</button>
            </div>
            <img src={photoURL} alt="User avatar" className='rounded-full w-12 h-12 object-cover' />
        </div>
    )
}

export default UserPreview;