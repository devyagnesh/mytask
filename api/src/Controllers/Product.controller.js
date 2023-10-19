const multer = require("multer");
const Product = require("../Models/Product");
const ErrorHandler = require('../Utils/ErrorHandler');
/**
 * to store file on server with unique name
 */
const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/public");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + "-" + (uniqueSuffix + `.${extension}`));
  },
});

const Upload = multer({
  storage: multerStorage,
});

const AddProduct = async (req, res, next) => {
  try {
    const { name, description, price } = req.body;

    if (!name || name === "") {
       
      return  next(ErrorHandler(400, "Please enter product name !"));
    }
    if (!description || description === "") {
      return next(ErrorHandler(400, "Please enter product description !"));
    }
    if (!price || price === "") {
      return next(ErrorHandler(400, "Please enter product price !"));
    }


    /* replace the ./ with empty string */
    const destination = req.file.destination.replace("./", "");

    /* get the newly generated filename  */
    const filename = req.file.filename;

    /*
        generating full image url 
    */
    const fullUrl = `${req.protocol}://${req.hostname}:${
      process.env.SERVER_PORT || 5000
    }/${filename}`;

    const newProduct = new Product({
        name : name,
        description : description,
        image : fullUrl,
        price:price,
    });

    const product = await newProduct.save();

    return res.status(201).json({
        success:true,
        status:201,
        message : 'Product added',
    });
  } catch (error) {
    return next(error);
  }
};



const getAllProducts = async (req,res,next)=>{
    try {
        const allProducts = await Product.find();

console.log(allProducts)
        return res.status(200).json(allProducts);
    } catch (error) {
        return next(error);
    }
}

module.exports = { AddProduct, Upload, getAllProducts };
