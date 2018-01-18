import mysql from 'mysql'

// const config = require('/Users/xiongMingCai/.password.js');
const pool = mysql.createPool({
    host: 'bdm255611617.my3w.com',
    user: 'bdm255611617',
    password: 'qwerasdf',
    database: 'bdm255611617_db',
    insecureAuth: true
});

export default (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}