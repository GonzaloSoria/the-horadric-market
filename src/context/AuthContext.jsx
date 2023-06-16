import { 
    GoogleAuthProvider, 
    signInWithRedirect, 
    signOut ,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase/config';
import { 
    createContext, 
    useState, 
    useContext, 
    useEffect 
} from "react";

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    
    const handleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    const handleSignOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => {
            unsuscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            handleSignIn,
            handleSignOut,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}