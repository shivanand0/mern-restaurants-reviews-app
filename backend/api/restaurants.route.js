import express from 'express';
import RestaurantCtrl from "./restaurants.controller.js"
import ReviewsCtrl from "./reviews.controller.js"
const router = express.Router()

router.route("/").get(RestaurantCtrl.apiGetRestaurants)

router.route("/").get(RestaurantCtrl.apiGetRestaurants)
router.route("/id/:id").get(RestaurantCtrl.apiGetRestaurantById)
router.route("/cuisines").get(RestaurantCtrl.apiGetRestaurantCuisines)

router
    .route("/review")
    .post(ReviewsCtrl.apiPostReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)
export default router