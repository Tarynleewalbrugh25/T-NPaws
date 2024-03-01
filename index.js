// console.log('안녕하세요');
import {userRouter} from './controller/UserController.js';
import {productRouter} from './controller/ProductController.js';
import cookieParser from "cookie-parser"
import {errorHandling} from './middleware/Errorhandling.js';
import path from 'path'
import cors from 'cors'
import express  from 'express'
import {config} from 'dotenv'
config()
const app = express()
const port = +process.env.PORT || 7000
//middleware
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
})
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser(),
    cors()
)
app.get('^/$|/T&NPaws', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './static/index.html'))
})
// app.use('/^')
// app.use('^/$')
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use(errorHandling)
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})