import pool from '../config/db.js';

export const addChild = async (req, res) => {
    const { name, age, schoolName } = req.body;
    const parentId = req.body.userId;  

   
    if (!name || !age || !schoolName) {
        return res.status(400).json({
            success: false,
            message: "Please provide all required fields: name, age, and school name."
        });
    }

    try {
       
        const query = `INSERT INTO children (name, age, school_name, parent_id) VALUES (?, ?, ?, ?)`;
        const result = await pool.query(query, [name, age, schoolName, parentId]);

        return res.status(201).json({
            success: true,
            message: "Child added successfully",
            data: result
        });
    } catch (error) {
        console.error("Error adding child:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while adding the child."
        });
    }
};


export const getChildrenByParent = async (req, res) => {
    const parentId = req.body.userId;  // From the token

    try {
       
        const query = `SELECT * FROM children WHERE parent_id = ?`;
        const [children] = await pool.query(query, [parentId]);

        if (children.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No children found for this parent."
            });
        }

        return res.status(200).json({
            success: true,
            data: children
        });
    } catch (error) {
        console.error("Error fetching children:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while fetching children."
        });
    }
};
