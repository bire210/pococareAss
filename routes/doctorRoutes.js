const express = require("express");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorCtrl");
const authMiddleware = require("../middleware/authMiddleware");
const docRouter = express.Router();

//POST SINGLE DOC INFO
docRouter.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//POST UPDATE PROFILE
docRouter.post("/updateProfile", authMiddleware, updateProfileController);

//POST  GET SINGLE DOC INFO
docRouter.post("/getDoctorById", authMiddleware, getDoctorByIdController);

//GET Appointments
docRouter.get(
  "/doctor-appointments",
  authMiddleware,
  doctorAppointmentsController
);

//POST Update Status
docRouter.post("/update-status", authMiddleware, updateStatusController);

module.exports = docRouter;