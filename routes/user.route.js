var express = require('express');
var router = express.Router();
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');
var authMiddleware = require('../middlewares/auth.middlewares');


router.get("/",authMiddleware.requireAuth,controller.index );

router.get("/:id/delete", authMiddleware.requireAuth,controller.delete);

router.get("/:id/update", authMiddleware.requireAuth,controller.update);

router.post("/create", authMiddleware.requireAuth,validate.postCreate, controller.postCreate);

router.post("/update", authMiddleware.requireAuth,controller.postCreate);

module.exports = router;