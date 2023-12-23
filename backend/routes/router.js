import { Router } from "express";
import sendEmail from "../controller/emailSender.controller.js";

const router = Router()

router.route('/sendmail').post(sendEmail)

export default router