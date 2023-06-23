const express = require("express");
const {
  loginCont,
  registerCont,
  authCont,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDocotrsController,
  bookeAppointmnetController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middleware/authMiddleware");

//router onject
const userRouter = express.Router();

//routes

//REGISTER || POST
userRouter.post("/register", registerCont);

//LOGIN || POST
userRouter.post("/login", loginCont);

//Auth || POST
userRouter.get("/getUserData", authMiddleware, authCont);

//APply Doctor || POST
userRouter.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notifiaction  Doctor || POST
userRouter.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
//Notifiaction  Doctor || POST
userRouter.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//GET ALL DOC
userRouter.get("/getAllDoctors", authMiddleware, getAllDocotrsController);

//BOOK APPOINTMENT
userRouter.post(
  "/book-appointment",
  authMiddleware,
  bookeAppointmnetController
);

//Booking Avliability
userRouter.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);

//Appointments List
userRouter.get(
  "/user-appointments",
  authMiddleware,
  userAppointmentsController
);

module.exports = userRouter;
