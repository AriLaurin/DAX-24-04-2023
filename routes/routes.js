const { Router } = require("express");//we need the express router to plug into applications
const Controller = require("../controllers/Controller"); //exports our controller to get our functions
const router  = Router(); ///creates a new router

router.get("/", Controller.home_get);
router.post("/", Controller.home_post);

module.exports = router;