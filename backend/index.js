const express = require("express");
const dotenv = require('dotenv').config();
const connection = require('./config/db');
const cors = require("cors");
const productRouter = require("./routes/product.route");
const orderRouter = require("./routes/order.route")

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors());
// app.use('/order', orderRouter);
// app.use('/product',productRouter);

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);


app.get('/', (req,res) =>{
    res.send("Hello World");
})


app.listen(PORT, async() => {
    try{
        await connection
        console.log(`server is running on port ${PORT} and DB is also connected`);
    }
    catch(error){
        console.log("Error Connecting",error);
    }
});

