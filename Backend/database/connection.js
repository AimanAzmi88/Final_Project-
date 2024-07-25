import pkg from 'pg';
const { Pool } = pkg;
import createUserTable from '../model/user.js';
import profile from '../model/profile.js';
import slot from '../model/slot.js';

// export const pool = new Pool({
//     user: 'man_d_user',
//     host: 'cqgjaqt2ng1s73fc7nc0-a.singapore-postgres.render.com',
//     database: 'man_d',
//     password: '1EghUZI6hnx6oqMFGoi4YE1jM4URxQDS',
//     port: 5432,
// });

export const pool = new Pool({
    connectionString:  "postgres://default:h97RTbsGyqQd@ep-divine-mode-a13xljo7.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require",
  })

export const databaseInit = async () => {
    try{
        const dbName = await pool.query("SELECT current_database()");
        const name = dbName.rows[0].current_database;
        const dbRes = await pool.query("SELECT NOW()");
        const time = dbRes.rows[0].now

        console.log(`Connected to database: ${name}`);
        console.log(`Current time: ${time}`);

        await createUserTable();
        await profile();
        await slot();
    } catch(e){
        console.error('Error while connecting to database');
    }
};
