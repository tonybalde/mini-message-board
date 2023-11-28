// // // const messages = [
// // //   {
// // //     text: "Hi there!",
// // //     user: "Amando",
// // //     added: new Date()
// // //   },
// // //   {
// // //     text: "Hello World!",
// // //     user: "Charles",
// // //     added: new Date()
// // //   }
// // // ];

// // // var express = require('express');
// // // var router = express.Router();

// // // /* GET home page. */
// // // router.get('/', function(req, res, next) {
// // //   res.render('index', { title: 'Mini Message Board' });
// // // });

// // // module.exports = router;

// // var express = require('express');
// // var router = express.Router();

// // const messages = [
// //   {
// //     text: "Hi there!",
// //     user: "Amando",
// //     added: new Date()
// //   },
// //   {
// //     text: "Hello World!",
// //     user: "Charles",
// //     added: new Date()
// //   }
// // ];

// // /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   res.render('index', { title: 'Mini Message Board', messages: messages });
// // });

// // module.exports = router;

// var express = require('express');
// var router = express.Router();

// /* Existing messages array */
// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date()
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date()
//   }
// ];

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Mini Message Board', messages: messages });
// });

// /* GET new message form. */
// router.get('/new', function(req, res, next) {
//   res.render('form', { title: 'New Message Form' });
// });

// module.exports = router;


var express = require('express');
var router = express.Router();

/* Existing messages array */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

/* GET new message form. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message Form' });
});

/* POST new message. */
router.post('/new', function(req, res, next) {
  // Assuming you have a form with input fields named 'author' and 'message'
  const author = req.body.author;
  const messageText = req.body.message;

  // Add a new message to the messages array
  const newMessage = {
    text: messageText,
    user: author,
    added: new Date()
  };

  messages.push(newMessage);

  // Redirect to the home page after adding the new message
  res.redirect('/');
});

module.exports = router;
