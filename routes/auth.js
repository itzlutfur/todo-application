const express = require('express');
const router = express.Router();
const fs = require('fs');
const bcrypt = require('bcrypt');
const path = require('path');
const { hash } = require('crypto');

const usersFilePath = path.join(__dirname, '../users.json');

router.post('/signup', (req, res) => {
    const {id,username,password} = req.body;
    let data = [];

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        } else {
            const userData = { id, username, password:hash };
            const raw = fs.readFileSync(usersFilePath);
            data = JSON.parse(raw);
            data.push(userData);
            fs.writeFileSync(usersFilePath, JSON.stringify(data,null,2));
        }
    });  
    res.status(200).json({id,username,password:hash});
});


router.post('/login', (req, res) => {
  // Handle user login logic here
  res.send('User logged in successfully!');

});

module.exports = router;