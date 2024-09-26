// const express = require('express');
// const connectDB = require('./config/db');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const authRoutes = require('./routes/auth');

// const jwt = require('jsonwebtoken'); // Add this for JWT
// require('dotenv').config();

// const app = express();

// // Connect to MongoDB
// connectDB();
// const db=
// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// app.use('/api/auth', authRoutes);

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Import file system module

const PORT = 8081;
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// MongoDB setup
const uri = "mongodb+srv://sreekar:Sreekar27@cluster0.q61sf.mongodb.net/Project 0?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect();
const db = client.db("data");
const col = db.collection("sdp")
const group = db.collection("Groups");

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save files in the "uploads" directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file with timestamp
  }
});
const upload = multer({ storage: storage });

// Serve the uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (request, response) => {
  response.send('This is a Server');
});

// Route to handle creating a new group with an image upload

// Route to fetch all groups
app.get('/viewall', async (request, response) => {
  try {
    const groups = await group.find().toArray();
    response.status(200).json(groups);
  } catch (error) {
    console.error('Fetch error:', error);
    response.status(500).send('Error fetching groups');
  }
});

app.post('/insert', (request, response) => {
  col.insertOne(request.body);
  console.log(request.body);
  response.send(request.body);
});

app.get('/check', (req, res) => {
  async function find() {
    try {
      const result = await col.findOne({ email: req.query.un });
      if (result == null) {
        res.send("FAIL");
      } else {
        if (req.query.pw === result.password) {
          res.send("PASS");
        } else {
          res.send("FAIL");
        }
      }
    } finally {}
  }
  find().catch(console.dir);
});

app.listen(PORT, () => {
  console.log('Server started on port ${PORT}');
});