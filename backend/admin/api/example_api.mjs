import Express from "express";

const example_api = Express.Router();

example_api.get("/test", (req, res) => {
    res.json({ msg: "Imma black Ninja" });
});

export default example_api;
