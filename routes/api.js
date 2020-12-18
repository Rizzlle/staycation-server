const router = require("express").Router();
const apiController = require("../controllers/ApiController");
const { upload, uploadMultiple } = require("../middleware/multer");

router.get("/landing-page", apiController.landingPage);
router.get("/detail-page/:id", apiController.detailPage);
router.post("/booking-page", upload, apiController.bookingPage);

module.exports = router;
