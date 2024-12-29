import mongoose from "mongoose";

interface User {
  _id: mongoose.Schema.Types.ObjectId;
  password: string;
  username: string;
  bookmarks: string[];
}

export const UserSchema = new mongoose.Schema<User>({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bookmarks: {
    type: [String],
    required: false,
  },
  //. . . other fields
});

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
