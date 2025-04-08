import bcrypt from "bcrypt";
import { createToken } from "../middleware/token.js";
import pool from "../config/db.js";
import validator from "validator";

const loginUser = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const table = role === 'parent' ? 'parents' : 'van_drivers';
    const SELECT_USER_QUERY = `SELECT * FROM ${table} WHERE email = ?`;
    const [rows] = await pool.query(SELECT_USER_QUERY, [email]);

    if (rows.length === 0) {
      return res.json({ success: false, message: "Invalid email or password" });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid email or password" });
    }

    const token = createToken(user.id);
    res.json({ success: true, token });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.json({ success: false, message: "Error logging in user" });
  }
};

const registerUser = async (req, res) => {
  const { name, password, email, tel_num, role, address } = req.body;
  try {
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Password must be at least 8 characters" });
    }
    if (tel_num.length !== 10) {
      return res.json({ success: false, message: "Invalid phone number" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const table = role === 'parent' ? 'parents' : 'van_drivers';
    const INSERT_USER_QUERY = `INSERT INTO ${table} (name, email, password, tel_num, address) VALUES (?, ?, ?, ?, ?)`;
    const [result] = await pool.query(INSERT_USER_QUERY, [name, email, hashedPassword, tel_num, address]);

    const token = createToken(result.insertId);
    res.json({ success: true, token });
  } catch (error) {
    console.error("Error registering user:", error);
    res.json({ success: false, message: "Email already exists" });
  }
};

export { loginUser, registerUser };
