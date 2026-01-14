import express from "express";
import { getAllContacts } from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/contacts", getAllContacts);

export default router;
