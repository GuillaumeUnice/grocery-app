var express = require('express');
var router = express.Router();
const grocery = require('./grocery');

// middleware
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

router.get('/', (req, res) => {
  console.log(grocery.getAllGrocery());
  res.json({ message: 'Welcome to the Grocery List API...' });
});

router.route('/grocery').get((req, res) => {
  res.json(grocery.getAllGrocery());
});
router.route('/grocery').post((req, res) => {
  console.log(req.body);
  grocery.addGrocery(req.body);
  res.json();
});
router.route('/grocery/:id').put((req, res) => {
  grocery.updateGrocery(req.body);
  res.json();
});
router.route('/grocery/:id').get((req, res) => {
  res.json(grocery.getGrocery(parseInt(req.params.id, 10)));
});
router.route('/grocery/:id').delete(function(req, res) {
  grocery.deleteGrocery(parseInt(req.params.id, 10));
  res.json();
});

module.exports = router;
