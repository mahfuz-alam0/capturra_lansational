import React from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = React.createContext();
const auth = getAuth(app);

const google_provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const create_user = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const google_sign_in = () => {
        setLoading(true);
        return signInWithPopup(auth, google_provider);
    }

    const update_user_profile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    const sign_out = () => {
        localStorage.removeItem('genius_token');
        return signOut(auth);
    }

    React.useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, current_user => {
            setUser(current_user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const auth_info = {
        user, loading,
        setLoading,
        create_user, login, sign_out, google_sign_in,
        update_user_profile
    };

    return (
        <AuthContext.Provider value={auth_info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;