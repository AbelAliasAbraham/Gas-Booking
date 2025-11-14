// backend/models/Booking.js

const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  cylinderType: {
    type: String,
    required: true,
    enum: ['5kg', '14.2kg', '19kg'] 
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['cash', 'card']
  },
  bookingDate: {
    type: Date,
    default: Date.now
  },
  // ✅ NEW FIELD: To store the estimated delivery date
  deliveryDate: { 
    type: Date, 
    required: true 
  },
  status: {
    type: String,
    default: 'Pending',
    enum: ['Pending', 'Confirmed', 'Delivered', 'Cancelled']
  }
});

module.exports = mongoose.model("Booking", bookingSchema);