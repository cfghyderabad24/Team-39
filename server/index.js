const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const CredModel = require('./models/Details.js');
const AdminModel = require('./models/Admin.js');

dotenv.config(); 

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

app.post('/check', (req, res) => {
    const { email } = req.body;
    CredModel.findOne({ email: email }).then(user => {
        if (user) {
            res.json(true);
        } else {
            res.json(false);
        }
    }).catch(err => {
        console.error('Error finding user:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    });
});

app.post('/store', (req, res) => {
    CredModel.create(req.body).then(cred => {
        res.json(cred);
    }).catch(err => {
        console.error('Error storing user:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    });
});

app.post('/login', (req, res) => {
    const { email, password, role } = req.body;

    if (role === 'user') {
        CredModel.findOne({ email: email }).then(user => {
            if (user && user.password === password) { // Add appropriate password checking in real scenarios
                res.json({ success: true, role: 'user' });
            } else {
                res.json({ success: false, message: 'Invalid credentials for user' });
            }
        }).catch(err => {
            console.error('Error finding user:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        });
    } else if (role === 'admin') {
        AdminModel.findOne({ email: email }).then(admin => {
            if (admin && admin.password === password) { 
                res.json({ success: true, role: 'admin' });
            } else {
                res.json({ success: false, message: 'Invalid credentials for admin' });
            }
        }).catch(err => {
            console.error('Error finding admin:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        });
    } else {
        res.status(400).json({ error: 'Invalid role specified' });
    }
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
