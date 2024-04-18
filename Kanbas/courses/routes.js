import {
  findAllCourses,
  createCourse,
  deleteCourse,
  updateCourse,
  findCourseById,
} from "./dao.js";

export default function CourseRoutes(app) {
  app.get("/api/courses", async (req, res) => {
    try {
      const courses = await findAllCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/courses", async (req, res) => {
    try {
      const newCourse = await createCourse(req.body);
      res.status(201).json(newCourse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    try {
      await deleteCourse(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const updatedCourse = req.body;
    try {
      await updateCourse(id, updatedCourse);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const course = await findCourseById(id);
      if (!course) {
        res.status(404).send("Cannot find Course!");
        return;
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}