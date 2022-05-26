//GOAL: Connect to the database and get success message
//create a db on Heroku
//install pg module
//Import the pg module
// create an instance of the pg 
// add credentials to the pg.client object
//add the SSL thing
// start connection
//send query
//end connection

import pg from 'pg';
import 'dotenv/config';


// const client = new pg.Client({
    const pool = new pg.Pool({
user: process.env.PGUSER,
host: process.env.PGHOST,
database: process.env.PGDATABASE,
password: process.env.PGPASSWORD,
port: process.env.PGPORT,
ssl: {rejectUnauthorized: false}
})

// Create connection
// await client.connect(); // Pool vs Client only difference is that you don't connect

// const results = await client.query('CREATE TABLE myBook (title TEXT, author TEXT);');
// const results = await client.query(`INSERT INTO myBook VALUES ('How to create a DB', 'Glyn Knight');`);
const results = await pool.query(`SELECT * FROM myBook;`);
await pool.end();

console.log(results.rows);