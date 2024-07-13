import { pool } from "../../database/connection.js";


export const listSlot = async (req, res) => {
    const query = `
    SELECT slots.id, slots.description, slots.timestamp, slots.book, slots.book_userid, slots.pos1, slots.pos2, slots.pos3, slots.pos4, slots.pos5, users.username, users.id as user_id 
    FROM slots 
    INNER JOIN users ON slots.user_id = users.id
    `;
    try {
        const dbRes = await pool.query(query);
        const data = dbRes.rows;
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


export const userSlot = async (req, res) => {
    const query = `
    SELECT * FROM slots WHERE user_id = $1
    `;
    const userId = req.user;

    try {
        const dbRes = await pool.query(query, [userId])
        res.json(dbRes.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}
