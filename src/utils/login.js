import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/config';


//Sign in with Google Provider Popup
const google_provider = new GoogleAuthProvider();

export const handle_sign_in = async (loged) => {
    try {
        const res = await signInWithPopup(auth, google_provider);
        console.log(res);
        if(res.uid) {
            loged(true);
            console.log('hay acceso');
        } else {
            loged(false);
            console.log('No Hay acceso');
        }
    } catch (error) {
        console.error(error);
    };
};