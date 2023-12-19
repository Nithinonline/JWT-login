const express = require("express");

const router = express.Router();

const {signUp, login, userVerification, getUser,refreshToken, logout} = require("../controllers/items")

router.post("/signup",signUp);
router.post("/login",login)
router.get("/verify",userVerification,getUser)
router.get("/refreshToken",refreshToken,userVerification,getUser)
router.post("/logout",userVerification,logout)
module.exports=router