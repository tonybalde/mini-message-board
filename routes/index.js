
var express = require('express');
var router = express.Router();
const Message = require('../models/messages');

const emojis = ['😊', '😎', '😁', '😜', '🙃', '🤗', '🥳', '🤩', '😉', '🤓'];

router.get('/', async function(req, res, next) {
  try {
    const messages = await Message.find({});
    res.render('index', { title: 'Mini Message Board', messages: messages });
  } catch (error) {
    console.error('Error retrieving messages:', error);
    res.status(500).send({ error: 'Error retrieving messages.' });
  }
});

router.route('/new')
  .get(function(req, res, next) {
    res.render('form', { title: 'New Message Form' });
  })
  .post(async function(req, res, next) {
    try {
      const author = req.body.author;
      const messageText = req.body.message;

      const randomEmoji = getRandomEmoji();

      const newMessage = new Message({
        author,
        messageText,
        icon: randomEmoji
      });

      await newMessage.save();

      // Redirect to the home page after adding the new message
      res.redirect('/');
    } catch (error) {
      console.error('Error saving message:', error);
      res.status(500).send({ error: 'Error saving message.' });
    }
  });

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

module.exports = router;
