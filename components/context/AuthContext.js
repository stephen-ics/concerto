import { useContext, createContext } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '../../lib/firebase'
import { signOut } from 'firebase/auth'

const AuthorizationContext = createContext({});

const AuthProvider = ({ children }) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const signIn = () => {
        signInWithGoogle()
    }

    const logout = () => {
        signOut(auth);
    }
    
    return (
        <AuthorizationContext.Provider value={{logout, signIn, user, loading, error}}>
            {children}
        </AuthorizationContext.Provider>
    )
}

const useAuthProvider = () => useContext(AuthorizationContext)

export default AuthProvider;
export { useAuthProvider }