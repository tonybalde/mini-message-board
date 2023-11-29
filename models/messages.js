
const mongoose = require('mongoose');

// Define the message schema
const MessageSchema = new mongoose.Schema({
  author: { type: String, required: true },
  messageText: { type: String, required: true },
  icon: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Create the Message model
const Message = mongoose.model('Message', MessageSchema);

// Export the Message model
module.exports = Message;

