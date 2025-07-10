const express = require("express");
const upload = require("../middlewares/profilePhotoMulter");

const {loggerMiddleware,authMiddleware} = require('../middlewares/commonMiddleware');
const { getUsers, getUserById, updateUser, deleteUser } = require("../Controllers/UserControllers/UserCotrollers");

const router = express.Router();

router.use(loggerMiddleware);
// http://localhost:8080/user/

router.get('/',authMiddleware, getUsers);

router.get('/:id',authMiddleware, getUserById);

router.put("/:id", upload.single("profilePhoto"), updateUser);

router.delete('/:id',authMiddleware, deleteUser);

module.exports = router;
