import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  user: process.env.DB_USER, // kimhong
  host: process.env.DB_HOST, // localhost
  database: process.env.DB_NAME, // volunteer_attendance
  password: process.env.DB_PASSWORD, // try@kimhong123!
  port: Number(process.env.DB_PORT) || 5432,
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) console.error("DB Connection Error:", err);
  else console.log("DB Connected. Time:", res.rows[0]);
});
