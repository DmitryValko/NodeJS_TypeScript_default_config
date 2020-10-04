import express, { Request, Response } from "express";
import dotenv from "dotenv";


const app = express();
dotenv.config();




app.get('/local/', (req: Request, res: Response) => {
    res.status(400).json({
        method: 'success',
        data: false
    })
});


export default app;