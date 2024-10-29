import User from "../models/userModel.js";
import mongoose from "mongoose";

// GET /users - Fetch all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      success: true,
      msg: "Get all the user",
      users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve users",
      error: error.message,
    });
  }
};

// GET /users/:id - Fetch user by ID
export const getUserById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(500).json({
      success: false,
      message: "Invalid User ID",
      error: err.message, // Optionally, include error message in the response
    });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(500).json({
        success: false,
        message: "User not found of this id ",
      });
    }
    return res.status(200).json({
      success: true,
      msg: "Get the user by id",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve user by id",
      error: error.message,
    });
  }
};

// POST /users/add-user - Add a new user
export const addUser = async (req, res) => {
  const { firstName, lastName, email, hobby } = req.body;

  try {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      hobby,
    });
    // Send a single response back to the client
    res.status(201).json({
      success: true,
      message: "User added successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add user. Email must be unique",
      error: error.message,
    });
  }
};

// PUT /users/update-user/:id - Update a user by ID
export const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid User ID",
    });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        error: "User not found to be updated",
      });
    }
    return res.status(200).json({
      success: true,
      msg: "User Updates Successfully",
      updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update user. Email must be unique",
      error: error.message,
    });
  }
};

// DELETE /users/delete-user/:id - Delete user by ID
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid User ID" });
  }

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res
        .status(404)
        .json({ error: "User not found with this id to be deleted" });
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      deletedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete user",
      error: error.message,
    });
  }
};
