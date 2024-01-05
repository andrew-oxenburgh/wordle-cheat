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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const analytics = getAnalytics(app)

// console.log(process.env)

// if (process.env.ENVIRONMENT === 'DEV') {
//     console.log("DEV MODE")
// console.log('connected to emulator');
connectFunctionsEmulator(getFunctions(), 'localhost', 5001)

// }
