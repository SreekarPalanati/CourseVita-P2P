import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { google } from "googleapis";
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';

dotenv.config();

const calendar = google.calendar({
    version: "v3",
    auth: process.env.API_KEY,
});

const app = express();
const PORT = process.env.PORT || 3000;
const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
);

const scopes = [
    "https://www.googleapis.com/auth/calendar"
];

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Google OAuth2 routes
app.get("/google", (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: scopes,
    });
    res.redirect(url);
});

app.get("/google/redirect", async (req, res) => {
    try {
        const code = req.query.code;
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);
        res.send("You Successfully Logged IN!");
    } catch (error) {
        console.error("Error retrieving access token", error);
        res.status(500).send("Error retrieving access token");
    }
});

app.post('/schedulerEvent', async (req, res) => {
    const { name, startDate, endDate, email, duration } = req.body;

    try {
        await calendar.events.insert({
            calendarId: 'primary',
            auth: oauth2Client,
            conferenceDataVersion: 1,
            requestBody: {
                summary: `Meeting with ${name}`,
                description: `Scheduled meeting with ${name}`,
                start: {
                    dateTime: new Date(startDate).toISOString(),
                    timeZone: 'Asia/Kolkata',
                },
                end: {
                    dateTime: new Date(endDate).toISOString(),
                    timeZone: 'Asia/Kolkata',
                },
                attendees: [{ email }],
            },
        });
        res.status(200).json({ msg: 'Meeting scheduled successfully!' });
    } catch (error) {
        console.error('Error scheduling the meeting:', error);
        res.status(500).json({ msg: 'Error scheduling the meeting' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log("Server started on port: " ,PORT);
});
