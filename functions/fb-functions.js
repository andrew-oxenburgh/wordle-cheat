// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const {logger} = require("firebase-functions");
const {onRequest, onCall} = require("firebase-functions/v2/https");
const ogs = require("open-graph-scraper");

const version = require("../package.json").version;

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

const onCallOptions = {
    cors: [
        "localhost",
        "sketch-oxenburgh.web.app",
        "oxenburgh.dev",
    ],

    timeoutSeconds: 30,
    maxInstances: 2,
};

const userAgent = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";
const fetchOptions = {
    method: "GET",
    headers: {
        "user-agent": userAgent,
    },
    cache: "force-cache",
};

exports.ogGraph = onCall(onCallOptions, async (request, _) => {
    const url = request.data.url;
    const result = {
        success: false,
    };
    try {
        if (url) {
            const qury = await ogs({url, fetchOptions});

            result.success = true;
            result.graph = qury.result;
        } else {
            result.success = false;
            result.error = "No URL provided";
        }
    } catch (err) {
        logger.log("*********ERROR", err);
        result.error = err.toString();
    }
    return result;
});

exports.ping = onRequest(onCallOptions, async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into Firestore using the Firebase Admin SDK.
    // const writeResult = await getFirestore()
    //     .collection("messages")
    //     .add({ original: original });
    // Send back a message that we've successfully written the message
    res.json({
        help: "Write a message. add an arg ?text=something to the url",
        text: original,
    });
});

exports.version = onRequest(onCallOptions, async (req, res) => {
    res.json({
        version,
    });
});
