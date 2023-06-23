const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");
const authMiddleware = require("../middleware/authMiddleware");

const adminRouter = express.Router();

//GET METHOD || USERS
adminRouter.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || DOCTORS
adminRouter.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//POST ACCOUNT STATUS
adminRouter.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = adminRouter;
