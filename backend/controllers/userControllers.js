import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@desc Auth user & get token
//@route GET /api/users/login
//@access Pubblic
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id)
    
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//@desc Register user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if(user){
    generateToken(res, user._id)
    
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin : user.isAdmin,
    })
  }else {
    res.status(400);
    throw new Error('Invalid user data')
  }
});

//@desc Logout user/ clear cookie
//@route POST /api/users/logout
//@access private
const logOutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
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
