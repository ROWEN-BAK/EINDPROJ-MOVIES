import express from "express";
import dotenv from "dotenv";
import workoutRoutes from "./routes/workoutRoutes.js";
dotenv.config();
const app = express();
// Gebruik de workout routes
app.use("/api/workouts", workoutRoutes);
app.listen(process.env.PORT, () => {
  console.log("De server draait op poort", process.env.PORT);
});
