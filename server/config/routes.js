// products = require('../controllers/ProductController.js')
users = require('../controllers/userController.js')
polls = require('../controllers/pollsController.js')
module.exports = function(app){
  // app.get('/products', products.index);
  app.post('/user', users.create);
  app.post('/finduser', users.find);
  app.post('/poll', polls.create);
  app.get('/polls', polls.index);
  app.get('/get/poll/:id',polls.find);
  app.patch('/poll/:id/:vote_id',polls.update);
  app.delete('/polls/:id',polls.delete)
}
