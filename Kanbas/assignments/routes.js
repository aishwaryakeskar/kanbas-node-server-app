import db from "../Database/index.js";
import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
    app.get("/api/courses/:cid/assignments", async (req, res) => {
        const { cid } = req.params;
        const assignments = await dao.getAssignments(cid);
        res.send(assignments);
    });

    app.post("/api/courses/:cid/assignments", async (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        const newAss = await dao.createAssignment(newAssignment)
        res.send(newAssignment);
    });

    app.delete("/api/assignments/:aid", async (req, res) => {
        const { aid } = req.params;
        await dao.deleteAssignment(aid);
        res.sendStatus(200);
    });

    app.put("/api/assignments/:aid", async (req, res) => {
        const { aid } = req.params;
        const assignmentIndex = db.assignments
            .findIndex((a) => a._id === aid);
        const newAss = await dao.updateAssignment(aid, req.body);
        res.send(newAss)
    });
}