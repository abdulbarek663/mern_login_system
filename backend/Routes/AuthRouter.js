
/* const router = require("express").Router();

router.post("/login",(req,resp)=>{
  resp.send("login success")
} );
router.post("/signup",(req,resp)=>{
  resp.send("signup success")
} );

module.exports = router;*/


 const { signup, login } = require("../Controllers/AuthController");
const {
  signupValidation,
  loginValidation,
} = require("../Middlewares/AuthValidation");

const router = require("express").Router();

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

module.exports = router; 
