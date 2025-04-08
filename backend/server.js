import 'dotenv/config';

import ChildRouter from './routes/childRoutes.js';
import cors from 'cors';
import express from 'express';
import pool from './config/db.js';
import userRouter from './routes/UserRouter.js';

const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// api endpoints

app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/child', ChildRouter);




// Test database connection
app.get('/test-db', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT 1 + 1 AS solution');
        res.json({ success: true, message: 'Database connected!', result: rows[0] });
    } catch (error) {
        console.error('Error connecting to the database:', error);
        res.status(500).json({ success: false, message: 'Error connecting to the database', error });
    }
});

app.get('/', (req, res) => {
    res.send('API WORKING');
});

app.listen(port, () => {
    console.log(`Server starting on http://localhost:${port}`);
});
