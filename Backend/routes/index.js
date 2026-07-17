import express from "express";
import { contact, getAllContacts } from "../controllers/CustomerController.js";
import { createPost, getAllPosts } from "../controllers/PostController.js";

import {
  consultance,
  getAllConsultances,
  getTodayConsultances,
} from "../controllers/ConsultanceController.js";

const router = express.Router();

// customer route
router.post("/contact", contact);
router.get("/getContacts", getAllContacts);

// post routes
router.post("/createPost", createPost);
router.get("/getPosts", getAllPosts);

// consultance routes
router.post("/consultance", consultance);
router.get("/getConsultances", getAllConsultances);
router.get("/todayConsultances", getTodayConsultances);

export default router;
