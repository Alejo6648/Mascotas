const db = '../database/conexion.js';


export const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email =?';
  const [rows] = await db.query(query, [email]);
  return rows[0];
};
