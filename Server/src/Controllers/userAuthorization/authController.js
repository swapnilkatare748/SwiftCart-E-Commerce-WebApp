const User = require("../../models/UserModule/UserModule");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../../utils/sendEmail");
const dotenv = require("dotenv");

dotenv.config();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({ name, email, password });
    await user.save();

    const token = generateToken(user._id);

    // Send verification email
    const emailSent = await sendEmail({
      to: user.email,
      subject: "Verify Your Email",
      text: `Hello ${user.name}, please verify your email.`,
      html: `<p>Hello ${user.name},</p>
             <p>Click the link below to verify your email:</p>
             <a href="${process.env.CLIENT_URL}/verify/${token}">Verify Email</a>`,
    });

    if (!emailSent) {
      return res.status(500).json({ message: "Signup successful, but email not sent." });
    }

    res.status(201).json({
      message: "Signup successful! Check your email for verification.",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Signup failed", error: error.message });
  }
};


exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      const token = generateToken(user._id);
  
      res.status(200).json({
        message: "Login successful!",
        user: { id: user._id, name: user.name, email: user.email },
        token, // Send token to frontend for authentication
      });
  
    } catch (error) {
      res.status(500).json({ message: "Login failed", error: error.message });
    }
  };