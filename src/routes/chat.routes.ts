import { Router } from "express";
import { getChats } from "../controllers/chat.controller";

const router = Router();

router.get('/', getChats);

export default router;