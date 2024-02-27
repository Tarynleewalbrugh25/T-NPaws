import { Connection as db } from "../config/index.js";
import { hash, compare } from 'bcrypt';
import { createToken } from "../middleware/AuthenticateUser.js";

class Users {
    async fetchUsers(req, res) {
        try {
            const qry = `
                SELECT userID, firstName, lastName, userAge, Gender, emailAdd, userPass, userProfile
                FROM Users;
            `;
            db.query(qry, (err, results) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ msg: 'Internal Server Error' });
                }
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
                SELECT userID, firstName, lastName, userAge, Gender, emailAdd, userPass, userProfile
                FROM Users
                WHERE userID = ?;
            `;
            db.query(qry, [req.params.id], (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ msg: 'Internal Server Error' });
                }
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
            if (!data.emailAdd || !data.userPwd) {
                return res.status(400).json({ msg: 'Email and password are required' });
            }
            
            data.userPwd = await hash(data.userPwd, 10);

            let user = {
                emailAdd: data.emailAdd,
                userPwd: data.userPwd
            };

            const qry = `
                INSERT INTO Users
                SET ?;
            `;

            db.query(qry, user, (err) => {
                if (err) {
                    console.error('Error creating user:', err);
                    return res.status(400).json({ msg: 'Please use another email address' });
                }
                let token = createToken(user); // Assuming createToken function exists
                res.json({
                    status: res.statusCode,
                    token,
                    msg: 'You\'re registered'
                });
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: 'Internal Server Error' });
        }
    }

    async deleteUser(req, res) {
        try {
            const userId = req.params.id;
            if (!userId) {
                return res.status(400).json({ msg: 'User ID is required' });
            }
            const qry = `
                DELETE FROM Users
                WHERE userID = ?;
            `;
            db.query(qry, [userId], (err) => {
                if (err) {
                    console.error('Error deleting user:', err);
                    return res.status(500).json({ msg: 'Failed to delete user' });
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
                SELECT userID, firstName, lastName, userAge, Gender, emailAdd, userPass, userProfile
                FROM Users
                WHERE emailAdd = ?;
            `;
            db.query(qry, [emailAdd], async (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ msg: 'Internal Server Error' });
                }
                if (!result.length) {
                    res.json({
                        status: res.statusCode,
                        msg: 'Wrong email address'
                    });
                } else {
                    const validPass = await compare(userPwd, result[0].userPass);
                    if (validPass) {
                        const token = createToken({
                            emailAdd,
                            userPwd
                        });
                        res.json({
                            status: res.statusCode,
                            msg: 'You are logged in',
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
                UPDATE Users
                SET ?
                WHERE userID = ?;
            `;
            const { prodID } = req.body;
            db.query(qry, [req.body, prodID], (err) => {
                if (err) {
                    console.error('Error updating user:', err);
                    return res.status(500).json({ msg: 'Failed to update user' });
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

export { Users };
