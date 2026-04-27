// Put in src\web\src\server.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { Pool } from 'pg';

const pool = new Pool({
    user: 'dbuser',
    host: 'database.server.com',
    database: 'mydb',
    password: process.env.POSTGRES_PASSWORD,
    port: 3211,
});

let test: any;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req: Request, res: Response) => {
    // Changed to req.query.q to get query string parameter
    const search = req.query.q as string || "";

    if (search !== "") {
        const squery = "SELECT * FROM users WHERE name = $1";
        pool.query(squery, [search], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Database error' });
            } else {
                res.json(result.rows);
            }
        });
    } else {
        res.status(400).json({ error: 'Missing search query' });
    }
});

app.listen(8000, () => {
    console.log("Server running");
});

let drinks: string[] = ['lemonade', 'soda', 'tea', 'water'];
let food: string[] = ['beans', 'chicken', 'rice'];
let iban: string = "DE012345678910112345";
