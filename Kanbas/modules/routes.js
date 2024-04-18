import courses from "../Database/courses.js";
import db from "../Database/index.js";
import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
    app.get("/api/courses/:cid/modules", async (req, res) =>  {
        console.log("in");
        const { cid } = req.params;
        const modules = await dao.getCourseModules(cid);
        console.log(modules)
        res.send(modules);
    });

    app.post("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        const newModule = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        const module = await dao.createModule(newModule);
        res.send(module);
    });

    app.delete("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        await dao.deleteModule(mid);    
        res.sendStatus(200);
    });

    app.put("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        console.log(mid, req.body)
        const newmod = await dao.updateModule(mid, req.body)
        console.log(newmod);
        res.sendStatus(204);
    });
}