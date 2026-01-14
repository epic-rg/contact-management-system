import express from "express";
import { getAllContacts } from "../controllers/admin.controller.js";
import { protectAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/contacts", protectAdmin, getAllContacts);

export default router;
