const FoodModel = require("../../models/food.js");

module.exports = {
  // getAllFoods: (callback) => {
  //     FoodModel.find({}).
  // },
  createNewFood: (body, callback) => {
    const newFood = new FoodModel(body);
    newFood
      .save()
      .then((newItem) => {
        callback({ success: true });
        console.log("Created new item: ", newItem);
      })
      .catch(() => {
        callback({ error: true });
      });
  },
};
