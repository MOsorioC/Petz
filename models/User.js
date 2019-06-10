const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

/**
 * Modelo Usuario
 * 
 * Contiene los datos basicos para estar en el sistema
 * 
 * @author Miguel Osorio <ing.mosorio19@gmail.com>
 */
const userSchema = new Schema({
  name: {
    required: true,
    type: String,
    minlength: 3
  },
  last_name: {
    required: true,
    type: String,
    minlength: 3
  },
  email: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String,
    minlength: 6
  },
  sex: {
    type: String,
    enum: ['H', 'M']
  },
  birth_day: {
    type: String
  },
  state: {
    type: Number,
    required: true
  },
  who_i_am: {
    type: String,
    minlength: 50,
    maxlength: 100
  },
  my_ideal_pet: {
    type: String,
    minlength:50,
    maxlength: 100
  },
  image_url: {
    type: String
  },
  phone_number: {
    type: String
  },
  role_user: {
    type: String,
    enum: ['GUEST', 'ADMIN'],
    default: 'GUEST'
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User