const Order = require('../Models/Orders');
const Product = require('../Models/Product');
const ErrorHandler = require('../Utils/ErrorHandler');

const addOrder = async (req,res,next)=>{
    try {
        const {firstname, lastname, address, products,total} = req.body;


        if(!firstname || firstname == ""){
            return next(ErrorHandler(400,'enter valid firstname !'));
        }
        else if(!lastname || lastname == ""){
            return next(ErrorHandler(400,'enter valid lastname !'));
        }

        else if(!address || address == ""){
            return next(ErrorHandler(400,'enter valid address !'));
        }
        else if(!products || products.length < 1){
            return next(ErrorHandler(400,'you must have product in cart to proceed further'));
        }

        // const countIndividualProductPrice = await Product.find({_id:{$in:products}});
        const newOrder = new Order({
            firstname,
            lastname,
            address,
            product:products,
            total
        });
        
        await newOrder.save();

        return res.status(201).json({
            success:true,
            statusCode : 201,
            message : 'order placed'
        });
    } catch (error) {
        return next(error);
    }
}

module.exports = {addOrder}