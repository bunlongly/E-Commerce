import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

//@desc Auth user & get token
//@route GET /api/users/login
//@access Pubblic
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

//@desc Register user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

//@desc Logout user/ clear cookie
//@route POST /api/users/logout
//@access private
const logOutUser = asyncHandler(async (req, res) => {
  res.send("logOut user");
});

//@desc Get your profile
//@route GET /api/users/profile
//@access public
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

//@desc udpate your profile
//@route PUT /api/users/profile
//@access Private/Admin
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

//@desc GET users
//@route GET /api/users/profile
//@access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

//@desc GET users by ID
//@route GET /api/users/;id
//@access Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

//@desc Delete users
//@route Delete /api/users/:id
//@access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete users");
});

//@desc update users
//@route put /api/users/:id
//@access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update users");
});

export {
  authUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
};
