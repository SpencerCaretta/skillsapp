// THE API ROUTE TO GET SELECTED SKILL + INFO

const router = require("express").Router();
// pull in the rates controller
const skillController = require("../../controllers/skillController");

// matches with "/api/skill"
// takes in the effective date paramater, followed by the claimant date paramater to return the correct rate information.
router.route("/:skill")
  // get calls the method that returns one skill
  .get(skillController.findOneSkill);

// matches with "api/skill/store-skill"
router.route("/store-skill/:id")
  //posts a single skill
  .post(skillController.storeSkill);

// export the router
module.exports = router;