const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "profilePhotos", // Folder in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png"], // Allowed formats
  },
});

const upload = multer({ storage });

module.exports = upload;
