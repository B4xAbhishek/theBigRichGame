const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});

connection.getConnection().then((res)=>{
    console.info("Connected Successfully!")
}).catch((err)=>{
    console.error(`Database connection error`, err)
})

export default connection;