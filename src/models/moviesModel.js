import { Schema, model, models } from "mongoose";

const moviesSchema = new Schema({
  title: String,
  thumbnail: {
    trending: {
      small: String,
      large: String,
    },
    regular: {
      small: String,
      medium: String,
      large: String,
    },
  },
  year: Number,
  category: String,
  rating: String,
  isBookmarked: Boolean,
  isTrending: Boolean,
});

const movieModel = models.shows || model("shows", moviesSchema);

export default movieModel;
