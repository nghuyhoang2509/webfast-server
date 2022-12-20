import express from "express";
import * as PageController from "../controller/page.js";

const router = express.Router();

router.get("/:uid", PageController.getListPage);

router.put("/:id", PageController.updateInfoPage);

router.delete("/:id", PageController.deletePage);

router.post("/create", PageController.createPage);

export default router;
