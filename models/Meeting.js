const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

/**
 * Modelo Cita
 * 
 * @author Miguel Osorio <ing.mosorio19@gmail.com>
 */
const meetingSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'user' },
  pet: { type: Schema.ObjectId, ref: 'Pet' },
  message: {
    type: String,
    required: true,
    minlength: 50
  },
  request_date: {
    type: String,
    required: true
  },
  confirm_date: {
    type: String,
    required: true
  },
  adoption_date: {
    type: String,
    required: true
  },
  adopted: {
    type: Boolean
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Meeting = mongoose.model('meeting', meetingSchema)

module.exports = Meeting