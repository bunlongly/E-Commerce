import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//Fetcch all products
//Routes GET/api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

//Create a product
//Routes POST/api/products
//@access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/images/sample/jpg",
    brand: "Simple Brand",
    category: "Simple Category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });

  const createProduct = await product.save()
  res.sataus(201).json(createProduct())
});

export { getProducts, getProductById,createProduct };
