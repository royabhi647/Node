const express = require('express');
const planRouter = express.Router();

planRouter
    .route('allPlans')
    .get(getAllPlans);

planRouter.use(protectRoute) // check user is loggedin or not
planRouter
    .route('/plan/:id')
    .get(getPlan)

planRouter.use(isAuthorised(['admin','restaurentowner'])) // loggedin and check role of user
planRouter
    .route('/crudPlan')
    .post(createPlan)
    .patch(updatePlan)
    .delete(deletePlan)



// planRouter
//     .route()
//     .get(top3Plans)





module.exports = planRouter;