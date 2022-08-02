const express = require("express");
const router = express.Router();

router.use("/", require("./public/Clientregistration"));
router.use("/", require("./public/Patientregistration"));
router.use("/", require("./public/Staff"));
router.use("/encounter", require("./public/Encounter"));
router.use("/soapnote", require("./public/Soapnote"));
router.use("/complaint", require("./public/Complaint"));
router.use("/vital", require("./public/Vital"));
router.use("/clinic", require("./public/Clinic"));
router.use("/mobilecliniclocation", require("./public/Mclocation"));
router.use("/phonetype", require("./public/Phonetype"));
router.use("/discount", require("./public/Discount"));
router.use("/userGroup", require("./public/Usergroup"));
router.use("/taskcategory", require("./public/Taskcategory"));
router.use("/staffshift", require("./public/Staffshift"));
router.use("/species", require("./public/Species"));
router.use("/breed", require("./public/Breed"));
router.use("/sex", require("./public/Sex"));
router.use("/color", require("./public/Color"));
router.use("/mapcolor", require("./public/Mapcolor"));
router.use("/referredby", require("./public/Reference"));
router.use("/visitreason", require("./public/Visitreason"));
router.use("/reservationtype", require("./public/Reservationtype"));
router.use("/vendortype", require("./public/Vendortype"));
router.use("/manufacturer", require("./public/Manufacturer"));
router.use("/stockfacility", require("./public/Stockfacility"));
router.use("/vendor", require("./public/Vendor"));
router.use("/caregiver", require("./public/Caregiver"));
router.use("/vendoritem", require("./public/Vendoritem"));
router.use("/stockbasket", require("./public/Stockbasket"));
router.use("/relationship", require("./public/Relationship"));
router.use("/state", require("./public/State"));
router.use("/country", require("./public/Country"));
router.use("/timezone", require("./public/Timezone"));
router.use("/title", require("./public/Title"));
router.use("/appointment", require("./public/Appointment"));
router.use("/staffDesignation", require("./public/Staffdesignation"));
router.use("/specialization", require("./public/Specialization"));
router.use("/user", require("./public/User"));
router.use("/taginfo", require("./public/Taginfo"));
router.use("/appointmenttype", require("./public/Appointmenttype"));
router.use("/appointmentstatus", require("./public/Appointmentstatus"));
router.use("/followup", require("./public/Followup"));
router.use("/plantype", require("./public/Plantype"));
router.use("/planAction", require("./public/Planaction"));
router.use("/plancategory", require("./public/Plancategory"));
router.use("/plansubcategory", require("./public/Plansubcategory"));
router.use("/pricingstrategy", require("./public/Pricingstrategy"));
router.use("/planitem", require("./public/Planitem"));
router.use("/groupplanitem", require("./public/groupPlanItem"));
router.use("/reminder", require("./public/Reminder"));

module.exports = router;
