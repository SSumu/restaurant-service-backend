const Restaurant = require("../models/restaurantModel");

// Create a new restaurant
exports.createRestaurant = async (req, res, next) => {
  try {
    const { name, address, telephone } = req.body;
    const restaurant = new Restaurant({ name, address, telephone });
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (err) {
    next(err);
  }
};

// Retrieve restaurant details by ID
exports.getRestaurantById = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.json(restaurant);
  } catch (err) {
    next(err);
  }
};

// Update restaurant information by ID
exports.updateRestaurantById = async (req, res, next) => {
  try {
    const { name, address, telephone } = req.body;
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      { name, address, telephone },
      { new: true, runValidators: true }
    );
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.json(restaurant);
  } catch (err) {
    next(err);
  }
};

// Delete a restaurant by ID
exports.deleteRestaurantById = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

// List all restaurants
exports.listAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    next(err);
  }
};
