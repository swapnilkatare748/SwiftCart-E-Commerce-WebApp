const  mongoose =  require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String},
    password:{type:String ,required:true},
    profilePhoto: { type: String, default: "/Public/User_defolt.webp" },
    profileBanner: { type: String, default: "/Public/Profile.jpeg" },
    dateOfBirth: { type: String },
    phone: { type: String },
    shippingAddress: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },
    billingAddress: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },
    userRole: { type: String, default: "Customer" },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date },
    wishlist: [Number],
    cart: [{ productId: Number, quantity: Number }],
    orders: [
      {
        orderId: String,
        date: String,
        totalAmount: Number,
        status: String,
      },
    ],
    paymentMethods: [
      {
        type: String,
        maskedNumber: String,
        expiry: String,
      },
    ],
    notifications: {
      email: Boolean,
      sms: Boolean,
      push: Boolean,
    },
    socialLogin: {
      google: Boolean,
      facebook: Boolean,
    },
    security: {
      twoFactorAuth: Boolean,
      recoveryEmail: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
