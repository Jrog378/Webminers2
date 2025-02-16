import {initializeApp} from "firebase/app";
import {getFirestore, doc, setDoc,} from "firebase/firestore";

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import Router from "next/router";
import axios from "axios";
import {toast} from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyAXAn0p7_SG9pxz4GPQkxYmUSo0rBaZiDI",
    authDomain: "webminers-7a36d.firebaseapp.com",
    projectId: "webminers-7a36d",
    storageBucket: "webminers-7a36d.appspot.com",
    messagingSenderId: "829020836202",
    appId: "1:829020836202:web:29b143e682e5ad92635513"
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        switch (err.code) {
            case 'auth/invalid-email':
                console.error(err.code);
                alert('Invalid Email. Please try again');
                break
            case 'auth/user-not-found':
                    console.error(err.code);
                    alert('User Not Found. Please try again');
                    break
            case 'auth/wrong-password':
                console.error(err.code);
                alert('Invalid Password. Please try again');
                break
            case 'auth/missing-email':
                    console.error(err.code);
                    alert('Please Enter Email');
                    break
                case 'auth/missing-password':
                    console.error(err.code);
                    alert('Please Enter Password');
                    break
            default:
                console.error(err.code);
                alert('Error. Please Try Again');
        }
    }
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const registerWithEmailAndPassword = async (name, email, password) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;

            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                name,
                authProvider: "local",
                email,
                plan: 'none',
            });

            await axios.put("api/mailingList", {email,}).then((result) => {
            if (result.status === 200) {
                toast.success(result.data.message);
            }
        })
            .catch((err) => {
                console.log(err);
            });

        } catch (err) {
            switch (err.code) {
                case 'auth/invalid-email':
                    console.error(err.code);
                    alert('Invalid Email. Please try again');
                    break
                case 'auth/email-already-in-use':
                    console.error(err.code);
                    alert('Email Already In Use. Please try again');
                    break
                case 'auth/missing-email':
                    console.error(err.code);
                    alert('Please Enter Email');
                    break
                case 'auth/missing-password':
                    console.error(err.code);
                    alert('Please Enter Password');
                    break
                default:
                    console.error(err.code);
                    alert('Error. Please Try Again');
            }
        }
    }
;

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth).then(() => Router.push('/')).catch((error) => {
        console.log(error)
    })
};

export {
    auth,
    db,
    sendPasswordResetEmail,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};