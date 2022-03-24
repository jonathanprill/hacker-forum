// import express from the library
const router = require('express').Router();


// import home-routes from file path
const homeRoutes = require('./home-routes.js');
// use .../ in URL address
router.use('/', homeRoutes);


// import api routes file path
const apiRoutes = require('./api');
// use .../api in URL address
router.use('/api', apiRoutes);

// import dashboard routes file path
const dashboardRoutes = require('./dashboard-routes.js');
// use .../dashboard in URL address
router.use('/dashboard', dashboardRoutes);



// export as router
module.exports = router;