var { db_read } = require('../config/db');

/**
 * Get list users
 */
function getUsers(req, res){
    db_read.query('SELECT * FROM users', (err, result) => {
        if(err){
            console.log(err);
            res.status(400).send("Error in Connection");
        } else {
            res.json({
                data: result
            })
        }
    })
}

module.exports = {getUsers};