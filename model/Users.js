import { Connection as db } from "../config/index.js";
import { hash, compare } from 'bcrypt';
import { createToken } from "../middleware/authenticateUser.js";

class Users {
    async fetchUsers(req, res) {
        try {
            const qry = `
                SELECT userID, firstName, lastName, userAge, gender, emailAdd, userPwd, userRole
                FROM User;
            `;
            db.query(qry, (err, results) => {
                if (err) throw err;
                res.json({
                    status: res.statusCode,
                    results
                });
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: 'Internal Server Error' });
        }
    }

    async fetchUser(req, res) {
        try {
            const qry = `
                SELECT userID, firstName, lastName, userAge, gender, emailAdd, userPwd, userRole
                FROM User
                WHERE userID = ${req.params.id};
            `;
            db.query(qry, (err, result) => {
                if (err) throw err;
                res.json({
                    status: res.statusCode,
                    result
                });
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: 'Internal Server Error' });
        }
    }

    async createUser(req, res) {
        try {
            let data = req.body;
            data.userPwd = await hash(data?.userPwd, 10);
            let user = {
                emailAdd: data.emailAdd,
                userPwd: data.userPwd
            };
            const qry = `
                INSERT INTO User
                SET ?;
            `;
            db.query(qry, [data], (err) => {
                if (err) {
                    res.json({
                        status: res.statusCode,
                        msg: 'Please use another email address'
                    });
                } else {
                    let token = createToken(user);
                    res.json({
                        status: res.statusCode,
                        token,
                        msg: 'You\'re registered'
                    });
                }
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: 'Internal Server Error' });
        }
    }

    async deleteUser(req, res) {
        try {
            const prodID = req.params.id;
            if (!prodID) {
                return res.status(400).json({ msg: 'User ID is required' });
            }
            const qry = `
                DELETE FROM User
                WHERE userID = ?;
            `;
            db.query(qry, [prodID], (err) => {
                if (err) {
                    console.error('Error deleting User:', err);
                    return res.status(500).json({ msg: 'Failed to delete User' });
                }
                res.json({
                    status: res.statusCode,
                    msg: 'User deleted'
                });
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: 'Internal Server Error' });
        }
    }

    async login(req, res) {
        try {
            const { emailAdd, userPwd } = req.body;
            const qry = `
                SELECT userID, firstName, lastName, userAge, gender, emailAdd, userPwd, userRole
                FROM User
                WHERE emailAdd = '${emailAdd}';
            `;
            db.query(qry, async (err, result) => {
                if (err) throw err;
                if (!result?.length) {
                    res.json({
                        status: res.statusCode,
                        msg: 'wrong email address'
                    });
                } else {
                    const validPass = await compare(userPwd, result[0].userPwd);
                    if (validPass) {
                        const token = createToken({
                            emailAdd,
                            userPwd
                        });
                        res.json({
                            status: res.statusCode,
                            msg: 'you are logged in',
                            token,
                            result: result[0]
                        });
                    } else {
                        res.json({
                            status: res.statusCode,
                            msg: 'Please provide the correct password.'
                        });
                    }
                }
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: 'Internal Server Error' });
        }
    }

    async updateUser(req, res) {
        try {
            const qry = `
                UPDATE User
                SET ?
                WHERE userID = ?;
            `;
            const { prodID } = req.body;
            db.query(qry, [req.body, prodID], (err) => {
                if (err) {
                    console.error('Error updating:', err);
                    return res.status(500).json({ msg: 'Failed to update User' });
                }
                res.json({
                    status: res.statusCode,
                    msg: 'User updated'
                });
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: 'Internal Server Error' });
        }
    }
}

export default Users;