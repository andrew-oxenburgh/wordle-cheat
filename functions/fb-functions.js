// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const { logger } = require("firebase-functions");
const { onRequest, onCall } = require("firebase-functions/v2/https");
const ogs = require("open-graph-scraper")
const cors = require('cors');

// const { onDocumentCreated } = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

// let config = {
//     // databaseURL: 'http://localhost:5001/sketch-oxenburgh',
//     projectId: 'sketch-oxenburgh',
// };

// initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
exports.ogGraph = onRequest({
    cors: true,
    origin: true,
}, async (req, res) => {
    logger.log('khjfdkjhdsfkhkjdsfhkjshdfkjhdskjfhkjsdhfkjhdskjh', {})

    req.set('Access-Control-Allow-Origin', '*');


    logger.log('khjfdkjhdsfkhkjdsfhkjshdfkjhdskjfhkjsdhfkjhdskjh')

    try {
        const userAgent = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
        const url = req.query.url || 'https://cnn.com';
        const fetchOptions = {
            method: 'GET',
            headers: {
                'user-agent': userAgent,
            },
            cache: 'force-cache'
        }
        const qury = await ogs({ url, fetchOptions })
        res.json(qury.result)
    } catch (err) {
        logger.log("error", err)
        res.json(err, 500)
    }
});

exports.fnOgGraph = onCall({
    cors: true,
    origin: true,
}, async (data, context) => {

    return {
        hello: 'https://cnn.com',
    }

    // try {
    //     const userAgent = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    //     const url = data.url || 'https://cnn.com';
    //     logger.log("fnOgGraph", url)
    //     const fetchOptions = {
    //         method: 'GET',
    //         headers: {
    //             'user-agent': userAgent,
    //         },
    //         cache: 'force-cache'
    //     }
    //     const qury = await ogs({ url, fetchOptions })
    //     res.json(qury.result)
    // } catch (err) {
    //     logger.log("error", err)
    //     res.json(err, 500)
    // }
})

exports.ping = onRequest(async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into Firestore using the Firebase Admin SDK.
    // const writeResult = await getFirestore()
    //     .collection("messages")
    //     .add({ original: original });
    // Send back a message that we've successfully written the message
    res.json({ text: original });
});

// Listens for new messages added to /messages/:documentId/original
// and saves an uppercased version of the message
// to /messages/:documentId/uppercase
/* exports.makeuppercase = onDocumentCreated("/messages/{documentId}", (event) => {
    // Grab the current value of what was written to Firestore.
    const original = event.data.data().original;

    // Access the parameter `{documentId}` with `event.params`
    logger.log("Uppercasing", event.params.documentId, original);

    const uppercase = original.toUpperCase();

    // You must return a Promise when performing
    // asynchronous tasks inside a function
    // such as writing to Firestore.
    // Setting an 'uppercase' field in Firestore document returns a Promise.
    return event.data.ref.set({ uppercase }, { merge: true });
});
*/

