import express from "express";
import {
  addUser,
  fetchUsers,
  fetchUserById,
  modifyUser,
  removeUser
} from "../controllers/userController.js";

const router = express.Router();

router.post("/users", addUser);
router.get("/users", fetchUsers);
router.get("/users/:id", fetchUserById);
router.put("/users/:id", modifyUser);
router.delete("/users/:id", removeUser);


export default router;