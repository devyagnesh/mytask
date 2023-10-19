const mongoose  = require('mongoose');


const orderSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },

    lastname:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },

    address:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },

    product : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    }],

    total : {
        type:Number,
        required:true,
    }
});


const Order = mongoose.model('order',orderSchema);

module.exports = Order;