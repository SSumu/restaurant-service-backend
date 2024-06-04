const express = require("express");
const restaurantController = require("../controllers/restaurantController");
const router = express.Router();

router.post("/", restaurantController.createRestaurant);
router.get("/:id", restaurantController.getRestaurantById);
router.put("/:id", restaurantController.updateRestaurantById);
router.delete("/:id", restaurantController.deleteRestaurantById);
router.get("/", restaurantController.listAllRestaurants);

module.exports = router;
