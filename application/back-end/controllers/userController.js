import { json } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByUsername,
  getLibrary,
  addToLibrary
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

export const logIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await getUserByUsername(username);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    } else if (password === user.password) {
      req.session.logged_in = true;
      req.session.user_id = user.user_id;
      req.session.role = "User";
      //console.log(req.session)
      res.status(200).json({
        role: req.session.role,
        user_id: req.session.user_id
      })
    }
    else {
      req.session.logged_in = false;
      req.session.user_id = -1;
      req.session.role = "Guest";
      res.status(200).json({
        role: req.session.role,
        user_id: req.session.user_id
      })
      console.error("INCORRECT PASSWORD");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logOut = async (req, res) => {
  try {
    req.session.logged_in = false;
    req.session.user_id = -1;
    req.session.role = "Guest";
    res.status(200).json({
        role: req.session.role,
        user_id: req.session.user_id
      })
  } catch (error) {
    res.status(500).json({ status: { success: false, msg: err } })
  }
};

export const session = async (req, res) => {
  try {
    console.log("session data: ")
    console.log({
        role: req.session.role,
        user_id: req.session.user_id
      })
    res.status(200).json(
      {
        role: req.session.role,
        user_id: req.session.user_id
      }
    )
  } catch (error) {
    // console.log(error)
    res.status(500).json({ status: { success: false, msg: err } })
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

export const fetchLibrary = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id)
    const library = await getLibrary(id);
    // console.log(library);
    res.status(200).json(library);
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
};

export const addGameToLibrary = async (req,res) => {
  try {
      const data = req.body;
      console.log(data);
      const newGame = await addToLibrary(data);
      res.status(201).json(newGame);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}