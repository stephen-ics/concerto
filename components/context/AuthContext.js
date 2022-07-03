import { useContext, createContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { auth, firestore } from '../../lib/firebase'
import { query, where, collection } from 'firebase/firestore'
import { signOut, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'

const AuthorizationContext = createContext({});

const AuthProvider = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    

    const provider = new GoogleAuthProvider();

    const signIn = () => {
        signInWithRedirect(auth, provider);
    }

    const logout = async () => {
        signOut(auth);
    }
    
    return (
        <AuthorizationContext.Provider value={{ logout, signIn, user, loading, error }}>
            {children}
        </AuthorizationContext.Provider>
    )
}

const useAuthProvider = () => useContext(AuthorizationContext)

export default AuthProvider;
export { useAuthProvider }