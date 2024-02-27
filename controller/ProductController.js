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
productRouter.post('/addProduct',bodyParser.json(),(req, res)=>{
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
// productRouter.delete('/deleteProduct/:id', async (req, res) => {
//     try {
//         const productId = req.params.id;
//         await products.deleteProduct(productId);
//         res.json({
//             status: res.statusCode,
//             msg: 'Product deleted successfully'
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             status: 500,
//             msg: 'Failed to remove product'
//         });
//     }
// });

// // Update a product by ID
// productRouter.patch('/updateProduct/:id', async (req, res) => {
//     try {
//         const productId = req.params.id;
//         const updatedProduct = await products.updateProduct(productId, req.body);
//         res.json({
//             status: res.statusCode,
//             product: updatedProduct,
//             msg: 'Product updated successfully'
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             status: 500,
//             msg: 'Failed to update product'
//         });
//     }
// });

export { productRouter };
