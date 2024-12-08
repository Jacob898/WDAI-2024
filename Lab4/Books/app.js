const express= require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
app.use(express.json());

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'books.db',
});

const Book = sequelize.define('Book', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
});

sequelize.sync()
    .then(() => console.log('Database Synced'))
    .catch((error) => console.error('Error occured while syncing:',error));

app.get("/api/books", async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch(error) {
        console.error('Error occured while getting books: ',error)
        res.status(500).send("Internal Server Error");
    }
})

app.get("/api/books/:id", async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).send("Book not found");
        }
    } catch(error) {
        console.error('Error occured while getting book: ',error);
        res.status(500).send("Internal Server Error");
    }
})

app.post("/api/books", async (req, res) => {
    try {
        const { title, author, year } = req.body;
        const book = await Book.create({title, author, year});
        res.status(201).json({id: book.id})
    } catch (error) {
        console.error('Error occured while adding book: ',error);
        res.status(500).send("Internal Server Error");
    }
})

app.delete("/api/books/:id", async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.destroy();
            res.status(204).send("Book deleted");
        } else {
            res.status(404).send("Book not found");
        }
    } catch(error) {
        console.error('Error occured while deleting book: ',error);
        res.status(500).send("Internal Server Error");
    }
})

app.listen(3000, () => console.log(`Server running at http://localhost:3000/`));
