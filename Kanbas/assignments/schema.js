import mongoose from "mongoose";
const assignmentsSchema = new mongoose.Schema({
    title: String,
    course: String,
    },
  { collection: "assignments" });
export default assignmentsSchema;