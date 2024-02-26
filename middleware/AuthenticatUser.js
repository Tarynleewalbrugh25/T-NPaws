import { config } from 'dotenv';
config()
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;
function createToken(user) {   //create a token
  return sign(
    {
      emailAdd: user.emailAdd,
      userPwd: user.userPwd,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: '1h',
    }
    );
}
function verifyAToken(req, res, next) {
    // Retrieve a token from the browser
    const token = req?.headers['Authorization']  // it will be saved in the header , there are different ways to save cookies
    if (token) {
        if (verify(token, process.env.SECRET_KEY)) { //to verify a token
            next()
        } else {
            res?.json({
                status: res.statusCode,
                msg: 'Please provide your correct details'
            })
        }
    }
        else                        //error handling ths message is for the user
        {
            res?.json({
                status: res.statusCode,
                msg: "Please login"
            })
        }
    }
export {
    createToken,
    verifyAToken
}