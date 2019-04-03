// THE API ROUTE TO GET SELECTED SKILL + INFO

const router = require("express").Router();
// pull in the rates controller
const skillController = require("../../controllers/skillController");

// matches with "/api/estimate"
// takes in the effective date paramater, followed by the claimant date paramater to return the correct rate information.
router.route("/:skill")
  // get calls the method that returns the appropriate rates for the estimator
  .get(skillController.findOneSkill);

// matches with "api/estimate/store-estimate"
router.route("/store-skill/:id")
  .post(skillController.storeSKill);

// export the router
module.exports = router;