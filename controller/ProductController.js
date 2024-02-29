import express from 'express';
import bodyParser from 'body-parser';
import { products } from '../model/index.js';

const productRouter = express.Router();

productRouter.use(bodyParser.json()); // Apply bodyParser.json() middleware to parse JSON requests

// Fetch all products
productRouter.get('/', (req, res)=>{
    try{
        products.fetchProducts(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a product'
        })
    } 
})

// Fetch a product by ID
productRouter.get('/:id', (req, res)=>{
    try{
        products.fetchProducts(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'failed to get it'
        })
    }
})

// // Add a new product
productRouter.post('/product',bodyParser.json(),(req, res)=>{
    try{
        products.addProduct(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to add new product'
        })
    }
})

// // Delete a product by ID
productRouter.delete('/delete/:id', bodyParser.json(), (req, res)=>{
    try{
        products.deleteProduct(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to remove product try again later'
        })
    }
})

// // Update a product by ID
productRouter.patch('/update/:id', bodyParser.json(), (req, res)=>{
    try{
        products.updateProduct(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to update product try again later'
        })
    }
})

export { productRouter };
