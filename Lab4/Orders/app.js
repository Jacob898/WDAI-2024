require('dotenv').config();
const express= require('express');
const { Sequelize, DataTypes } = require('sequelize');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'orders.db',
});

function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(403).json('No token provided');
    }

    try {
        req.user = jwt.verify(token.split(" ")[1], process.env.ACCESS_TOKEN_SECRET);
        next();
    } catch (error) {
        return res.status(401).json('Invalid token');
    }
}

const Order = sequelize.define('Order', {
    orderID: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    userID : { type: DataTypes.INTEGER, allowNull: false },
    bookID: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
})

sequelize.sync()
    .then(() => console.log('Database Synced'))
    .catch((error) => console.error('Error occured while syncing:',error));

//get all Orders of one user

app.get("/api/orders/:id", async (req, res) => {
    try {
        const orders = await Order.findAll({where : { userID: req.params.id }});
        if (orders.length > 0) {
            res.json(orders);
        } else {
            res.status(404).send("This user has no orders")
        }
    } catch (error) {
        console.error("Error occured while getting orders: ", error);
        res.status(500).send("Internal Server Error");
    }
})

// add an order

app.post("/api/orders", verifyToken, async (req, res) => {
    try {
        const { userID, bookID, quantity } = req.body;

        //checking if book exist
        try {
            const bookExistsResponse = await fetch (`http://localhost:3000/api/books/${bookID}`)
            if(!bookExistsResponse.ok) {
                return res.status(400).send("Book does not exist");
            }
            const bookExists = await bookExistsResponse.json();
            if (!bookExists) {
                return res.status(400).send("Book does not exist");
            }
        } catch (error) {
            console.error("Error occured while checking if book exists: ", error);
            return res.status(500).send("Internal Server Error");
        }

        const newOrder = await Order.create({userID, bookID, quantity});
        res.status(201).json({orderID: newOrder.orderID});

    } catch (error) {
        console.error("Error occured while adding the order: ", error);
        return res.status(500).send("Internal Server Error");
    }
})

//delete an order

app.delete("/api/orders/:id", verifyToken, async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) {
            res.status(404).send("Order does not exist");
        }
        // if(order.userID !== req.user.id) {
        //     return res
        //         .status(403)
        //         .send("You don't have permission to delete this order");
        // }

        await order.destroy();
        res.status(204).send("Order successfully deleted");
    } catch (error) {
        console.error("Error occured while deleting this order: ", error);
        return res.status(500).send("Internal Server Error");
    }
})

//update an order

app.patch("/api/orders/:id", verifyToken,    async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) {
            res.status(404).send("Order does not exist");
        }
        // if(order.userID !== req.user.id) {
        //     return res
        //         .status(403)
        //         .send("You don't have permission to update this order");
        // }

        const { bookID, quantity } = req.body;
        await order.update({ bookID, quantity});
        res.json({message: "Order successfully updated"});
    } catch (error) {
        console.error("Error occured while deleting this order: ", error);
        return res.status(500).send("Internal Server Error");
    }
})

app.listen(3002, () => console.log(`Server running at http://localhost:3002/`));