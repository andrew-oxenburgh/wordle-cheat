// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions'
// import dotenv from 'dotenv'
// dotenv.config()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'sketch-oxenburgh.firebaseapp.com',
    projectId: 'sketch-oxenburgh',
    storageBucket: 'sketch-oxenburgh.appspot.com',
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID,
    // measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app)

// console.log(process.env)

// if (process.env.ENVIRONMENT === 'DEV') {
//     console.log("DEV MODE")
console.log('connected to emulator');
connectFunctionsEmulator(getFunctions(), '127.0.0.1', 5001)

// }
