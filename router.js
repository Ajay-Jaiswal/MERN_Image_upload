const express = require("express");
const router = express.Router()
const Controller = require('./controller')

const aws = require("aws-sdk")


//--------------------------------------------------------//

router.get("/test-me", function (req, res) {
    res.send("My server is running awesome!")
})
//--------------------------------------------------------//

router.post("/post",Controller.createpost)
router.get("/get",Controller.getapi)
//router.post("/login",userController.loginUser)








module.exports = router