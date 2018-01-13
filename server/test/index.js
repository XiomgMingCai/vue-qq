const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'bdm255611617.my3w.com',
    user: 'bdm255611617',
    password: 'qwerasdf',
    database: 'bdm255611617_db',
    insecureAuth: true
  }
);

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
