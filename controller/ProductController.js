import express from 'express';
import bodyParser from 'body-parser';
import { products } from '../model/index.js';

const productRouter = express.Router();

productRouter.use(bodyParser.json()); // Apply bodyParser.json() middleware to parse JSON requests

// Fetch all products
productRouter.get('/', async (req, res) => {
    try {
        const allProducts = await products.fetchAllProducts();
        res.json({
            status: res.statusCode,
            products: allProducts
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            msg: 'Failed to retrieve products'
        });
    }
});

// Fetch a product by ID
productRouter.get('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await products.fetchProductById(productId);
        res.json({
            status: res.statusCode,
            product: product
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            msg: 'Failed to retrieve product'
        });
    }
});

// Add a new product
productRouter.post('/addProduct', async (req, res) => {
    try {
        const newProduct = await products.addProduct(req.body);
        res.json({
            status: res.statusCode,
            product: newProduct,
            msg: 'Product added successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            msg: 'Failed to add new product'
        });
    }
});

// Delete a product by ID
productRouter.delete('/deleteProduct/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        await products.deleteProduct(productId);
        res.json({
            status: res.statusCode,
            msg: 'Product deleted successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            msg: 'Failed to remove product'
        });
    }
});

// Update a product by ID
productRouter.patch('/updateProduct/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProduct = await products.updateProduct(productId, req.body);
        res.json({
            status: res.statusCode,
            product: updatedProduct,
            msg: 'Product updated successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            msg: 'Failed to update product'
        });
    }
});

export { productRouter };
