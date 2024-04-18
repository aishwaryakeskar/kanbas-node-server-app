import mongoose from "mongoose";
const modulesSchema = new mongoose.Schema({
    name: String,
    description: String,
    course: { type: String, required: true },
    lessons: {
      type: Array,
      default: []
    },
    },
  { collection: "modules" });
export default modulesSchema;