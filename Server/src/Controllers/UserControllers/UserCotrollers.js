
const User = require("../../models/UserModule/UserModule.js");
const cloudinary = require("../../utils/cloudinary");

 const createUser = async (req, res) => {
  try {
    const { name, email, phone, gender } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create user
    const newUser = new User({
      name,
      email,
      phone,
      gender,
      profilePhoto: req.body.profilePhoto || "/Public/Profile.jpeg", // Default image
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
};

// ✅ Get all users
 const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};

// ✅ Get a single user by ID
 const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error: error.message });
  }
};

// ✅ Update user by ID
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    let user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let profilePhoto = user.profilePhoto; // Keep existing photo
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      profilePhoto = result.secure_url;
    }

    user = await User.findByIdAndUpdate(
      id,
      { ...req.body, profilePhoto },
      { new: true, runValidators: true }
    );

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error: error.message });
  }
};

// ✅ Delete user by ID
 const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error: error.message });
  }
};

module.exports = { deleteUser, updateUser, getUserById, createUser, getUsers };
