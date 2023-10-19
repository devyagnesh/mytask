const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const Connect = require('./config/Db.js');
const ProductRoutes = require('./Routes/Product.routes.js')
const OrderRoutes = require('./Routes/Order.routes.js')
const app = express();

app.use(express.json())
app.use("/", express.static("src/public"));
app.use(helmet())
app.use(cors());
Connect();


app.use('/api/product',ProductRoutes)
app.use('/api/order',OrderRoutes)



app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error !';

    return res.status(statusCode).json({
        success:false,
        statusCode:statusCode,
        message : message,
    });
});
module.exports= app;

