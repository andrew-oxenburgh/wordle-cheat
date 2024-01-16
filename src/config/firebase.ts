// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions'
import { isDevMode } from './isDevMode'

// import dotenv from 'dotenv'
// dotenv.config()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    /**
     * None of these keys need to be kept secret.
     */
    // https://firebase.google.com/docs/projects/api-keys
    apiKey: 'AIzaSyD2MO4OB1SrqWP-8X1MKQUBEQ1Z2K1GP80',
    authDomain: 'sketch-oxenburgh.firebaseapp.com',
    projectId: 'sketch-oxenburgh',
    storageBucket: 'sketch-oxenburgh.appspot.com',
    messagingSenderId: '557171498992',
    appId: '1:557171498992:web:3cea789e8045f631b90735',
    // measurementId: 'G-X62PYKXLQ2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
if (isDevMode()) {
    console.warn('in DEV mode')
    connectFunctionsEmulator(getFunctions(app), 'localhost', 5001)
}

export default app
