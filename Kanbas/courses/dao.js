import Course from "./model.js";

export const createCourse = (course) => {
  return Course.create(course);
};

export const findAllCourses = () => Course.find();

export const findCourseById = (courseId) =>  Course.find({ _id: courseId });

export const updateCourse = (courseId, course) =>
  Course.updateOne({ _id: courseId }, { $set: course });

export const deleteCourse = (courseId) => Course.deleteOne({ _id: courseId });