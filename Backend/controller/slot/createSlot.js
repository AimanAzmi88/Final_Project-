import { pool } from '../../database/connection.js';

const query = `
INSERT INTO slots (user_id, description, pos1, pos2, pos3, pos4, pos5)
VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
`;

const slot = async (req, res) => {
    try {
        const user_id = req.user;
        const description = req.body.description;
        const pos1 = req.body.pos1 !== undefined ? req.body.pos1 : false;
        const pos2 = req.body.pos2 !== undefined ? req.body.pos2 : false;
        const pos3 = req.body.pos3 !== undefined ? req.body.pos3 : false;
        const pos4 = req.body.pos4 !== undefined ? req.body.pos4 : false;
        const pos5 = req.body.pos5 !== undefined ? req.body.pos5 : false;

        const result = await pool.query(query, [user_id, description, pos1, pos2, pos3, pos4, pos5]);
        const data = result.rows[0]
        res.status(201).json({
            message: 'Slot created successfully',
            data
            
    });
    } catch (err) {
        console.error(err);
    }
}

export default slot;