import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { auth } from '../firebase/config';


//Sign in with Google Provider Popup
const google_provider = new GoogleAuthProvider();

export const handle_sign_in = async (setLoged) => {
    try {
        const res = await signInWithPopup(auth, google_provider);
        if(res != undefined) {
            setLoged(true);
            console.log('hay acceso');
        } else {
            setLoged(false);
            console.log('No Hay acceso');
        }
    } catch (error) {
        console.error(error);
    };
};