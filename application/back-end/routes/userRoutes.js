import express from "express";
import {
  addUser,
  fetchUsers,
  fetchUserById,
  modifyUser,
  removeUser,
  logIn,
  logOut,
  session,
  fetchLibrary,
  addGameToLibrary
} from "../controllers/userController.js";

const router = express.Router();

router.post("/users", addUser);
router.get("/users", fetchUsers);
router.get("/users/:id", fetchUserById);
router.put("/users/:id", modifyUser);
router.delete("/users/:id", removeUser);
router.post("/users/login", logIn);
router.post("/users/logout", logOut);
router.post("/users/session", session);
router.get("/users/library/:id", fetchLibrary);
router.post("/users/library/add", addGameToLibrary);


export default router;