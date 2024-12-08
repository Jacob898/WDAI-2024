const express= require('express');
const { Sequelize, DataTypes} = require('sequelize');
const app = express();
app.use(express.json());

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'users.db',
});

const User = sequelize.define('User', {
    userID: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
})

sequelize.sync()
    .then(() => console.log('Database Synced'))
    .catch((error) => console.error('Error occured while syncing:',error));

app.post('/api/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        let userAlreadyExists = await User.findOne({where: {email} });
        if (userAlreadyExists) {
            return res.status(400).json({message: 'Email already exists in the database'});
        }
        newUser = await User.create({email, password});
        res.status(201).json({id: newUser.id})
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Internal Server Error");
    }
})

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({where: {email,password} });
        if (user) {
            res.status(200).json({message: 'Logged in successfully'});
        } else {
            res.status(401).json({message: 'Invalid email or password'});
        }
    } catch (error) {
        console.error("Error occured while logging in:", error);
        res.status(500).send("Internal Server Error");
    }
})

app.listen(3001, () => console.log('Server running at http://localhost:3001/`'));