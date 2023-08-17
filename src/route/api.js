const express = require('express');
const router = express.Router();
const ProductsController = require("../controller/ProductsController");

// Create
router.post("/CreateProduct", ProductsController.CreateProduct);
// Read 
router.get("/ReadProduct", ProductsController.ReadProduct);
// Read Product by id
router.get("/ReadProductByID/:id", ProductsController.ReadProductByID);
// Update
router.post("/UpdateProduct/:id", ProductsController.UpdateProduct);
// Delete
router.get("/DeleteProduct/:id", ProductsController.DeleteProduct);






module.exports = router;