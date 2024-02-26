import { Connection as db } from "../config/index.js";
class Products {
    fetchProducts(req, res) {
        const qry = `
            SELECT prodID, prodName, prodQuantity, prodAmount, userID
            FROM Products;
        `;
        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
    fetchProduct(req, res) {
        const qry = `
            SELECT prodID, prodName, prodQuantity, prodAmount, userID
            FROM Products
            WHERE prodID = ${req.params.id};
        `;
        db.query(qry, (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result: result[0]
            });
        });
    }
    addProduct(req, res) {
        const qry = `
            INSERT INTO Products
            SET ?;
        `;
        db.query(qry, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: 'New product added'
            });
        });
    }
    deleteProduct(req, res) {
        const prodID = req.params.id;
        if (!prodID) {
            return res.status(400).json({ msg: 'Product ID is required' });
        }
        const qry = `
            DELETE FROM Products
            WHERE prodID = ?;
        `;
        db.query(qry, [prodID], (err) => {
            if (err) {
                console.error('Error deleting product:', err);
                return res.status(500).json({ msg: 'Failed to delete product' });
            }
            res.json({
                status: res.statusCode,
                msg: 'Product deleted'
            });
        });
    }
    updateProduct(req, res) {
        const qry = `
            UPDATE Products
            SET ?
            WHERE prodID = ?;
        `;
        const { prodID } = req.body;
        db.query(qry, [req.body, prodID], (err) => {
            if (err) {
                console.error('Error updating:', err);
                return res.status(500).json({ msg: 'Failed to update product' });
            }
            res.json({
                status: res.statusCode,
                msg: 'Product updated'
            });
        });
    }
}
export { Products };























































































































