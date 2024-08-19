import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const MONGODB_URI = 'mongodb+srv://user2000:Supriya6648@cluster0.x4xm4md.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 20000, // Adjust timeout as needed
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Image URLs array (replace with your actual image URLs)
const imageUrls = [
    'https://img.freepik.com/free-photo/3d-portrait-business-people_23-2150793953.jpg?t=st=1701872564~exp=1701876164~hmac=7f7aa1ed517334c0ea5b775fcb8dbbd4c3fec7fe8f2da886e3289c553541662c&w=826',
    // 'https://img.freepik.com/premium-vector/online-education-concept-3d-illustration-video-lectures-lessons-educational-platform-viewing-webinars-video-chats-with-teachers-elearning-vector-illustration-modern-web-banner-design_198565-1717.jpg',
    'https://quotefancy.com/media/wallpaper/3840x2160/50568-Daniel-J-Boorstin-Quote-Education-is-learning-what-you-didn-t-even.jpg',
    // Add more image URLs as needed
];

// API endpoint to get image URLs
app.get('/images', (req, res) => {
    res.json(imageUrls);
});

// MongoDB model for user registration
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
});

// Hash password before saving to database
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Create User model
const User = mongoose.model('User', userSchema);

// Register route
app.post('/register', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json({ message: 'Registration successful!' });
    } catch (error) {
        console.error('Error registering:', error);
        res.status(500).json({ message: 'Registration failed.' });
    }
});

// Login route
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (user && await bcrypt.compare(password, user.password)) {
            res.json({ message: 'Login successful!' });
        } else {
            res.status(401).json({ message: 'Invalid credentials.' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Login failed.' });
    }
});

// Contact Routes and Feedback Controller (Dummy examples)
// Replace with your actual logic if you have contact routes and feedback controller
app.get('/contact', (req, res) => {
    res.json({ message: 'Contact endpoint' });
});

app.use('/api/feedback', (req, res) => {
    res.json({ message: 'Feedback endpoint' });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
