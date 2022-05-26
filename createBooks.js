//connect to db - import query function with text arg
//await async function 
// CREATE books SQL 
// book_id INT Primary , title, author, 

import {query} from "../index.js"

const sqlString = `CREATE TABLE IF NOT EXISTS books2 (book_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, author_id INT, title TEXT, publishedDate DATE);`;

async function createBookTable(){
    console.log("start of function")
    const res = await query(sqlString);
    console.log("Books table created")
}

createBookTable()
