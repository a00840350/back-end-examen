import express from "express";
import VisitorsHttpHandler from "../handlers/visitors";

const router = express.Router();

const handler = new VisitorsHttpHandler();

router.post('/', (req, res) => handler.verifyVisitor(req, res));

export default router;