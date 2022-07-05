import ReviewsDAO from "../dao/reviewsDAO.js";

export default class ReviewsController {
  static async apiPostReview(req, res, next) {
    try {
      const restaurantId = req.body.restaurantId;
      const review = req.body.text;
      const userInfo = {
        name: req.body.name,
        id: req.body.userId,
      };
      const date = new Date();

      const ReviewResponse = await ReviewsDAO.addReview(
        restaurantId,
        userInfo,
        review,
        date
      );
      res.json({ status: "Success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiPutReview(req, res, next) {
    try {
      const reviewId = req.body.reviewId;
      const text = req.body.text;
      const date = new Date();

      const reviewResponse = await ReviewsDAO.updateReview(
        reviewId,
        req.body.userId,
        text,
        date
      );

      var { error } = reviewResponse;
      if (error) {
        res.status(400).json({ error });
      }

      if (reviewResponse.modifiedCount === 0) {
        throw new Error(
          "Unable to update review. User may not be original poster."
        );
      }

      res.json({ status: "Success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiDeleteReview(req, res, next) {
    try {
      const reviewId = req.query.id;
      const userId = req.body.userId;
      const reviewResponse = await ReviewsDAO.deleteReview(reviewId, userId);
      res.json({ status: "Success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
