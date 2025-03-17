import mongoose from "mongoose";
const Schema = mongoose.Schema;
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
// Maakt een model van het schema voor de database en deze noemen we 'Workout'
const Workout = mongoose.model("Workout", workoutSchema);
export default Workout;
