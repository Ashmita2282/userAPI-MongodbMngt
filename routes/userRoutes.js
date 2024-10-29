import express from "express";
import {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

import validateUser from "../middleware/validateUser.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/add-user", validateUser, addUser);
router.put("/update-user/:id", validateUser, updateUser);
router.delete("/delete-user/:id", deleteUser);

export default router;
