import { 
    createUser, 
    getUsers, 
    getUserById, 
    updateUser,
    deleteUser
  } from "../database/DBQueries.js";
  
  export const addUser = async (req, res) => {
    try {
      const userData = req.body;
      const newUser = await createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const fetchUsers = async (req, res) => {
    try {
      const users = await getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const fetchUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await getUserById(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  
  export const modifyUser = async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      const updatedUser = await updateUser(id, updates);
      if (!updatedUser || updatedUser.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const removeUser = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await deleteUser(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };