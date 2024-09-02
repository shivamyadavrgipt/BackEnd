const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post.js');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/logout', (req, res) => { 
    res.cookie("token","");
    res.redirect("/login");
});
app.get('/login', (req, res) => { 
    res.render("login");
});

app.post('/register', async (req, res) => {
    let { name, username, email, password, age } = req.body;
    let user = await userModel.findOne({ email: email });
    if (user) return res.status(500).send('Already registered with email');

    bcrypt.genSalt(10, async (err, salt) => {
        if (err) return res.status(500).send('Error in generating salt');
        bcrypt.hash(password, salt, async (err, hash) => {
            if (err) return res.status(500).send('Error in hashing password');
            let newUser = await userModel.create({
                username,
                name,
                age,
                password: hash,
                email,
                post: []  // Initialize with an empty array
            });
            let token = jwt.sign({ email: email, userid: newUser._id }, 'shhh');
            res.cookie('token', token);
            res.send('Registered');
        });
    });
});

app.post('/login', async (req, res) => {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email: email });
    if (!user) return res.status(400).send('User not found');

    bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return res.status(500).send('Error in password comparison');
        if (!isMatch) return res.status(400).send('Invalid password');

        let token = jwt.sign({ email: user.email, userid: user._id }, 'shhh');
        res.cookie('token', token);
        res.send('Logged in');
    });
});

app.listen(3000, () => {
    console.log('Server is running');
});
