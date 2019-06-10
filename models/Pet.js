const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

/**
 * Modelo Mascota
 * 
 * @author Miguel Osorio <ing.mosorio19@gmail.com>
 */
const petSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  sex: {
    type: String,
    enum: ['M', 'H'],
    required: true
  },
  birth_day: {
    type: String
  },
  breed: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  photo_url: {
    type: String,
    required: true
  },
  photos: [{
    type: String
  }],
  particular_signs: {
    type: String,
    required: true,
    minlength: 10
  },
  size: {
    type: String,
    enum: ['chico', 'mediano', 'grande', 'extragrande'],
    default: 'chico'
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip_code: {
      type: Number,
      minlength: 5
    }
  },
  visiting_time_start: {
    type: String,
    required: true
  },
  visiting_time_end: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: true
  },
  requirements: {
    type: String,
    required: true,
    minlength: 50
  },
  user: { type: Schema.ObjectId, ref: 'User' },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet