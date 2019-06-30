//Model imports
const User = require('../models/User')
//Third-party libraries
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

//validator
const Validator = require('../helpers/ValidatorHelper')

//variables
const bcryptSalt = 10


/**
 * Create User
 * 
 * creates a new simple user and send email verification token
 * 
 * @param req
 * @param req
 * @param next
 * 
 * @author Miguel Osorio <ing.mosorio19@gmail.com>
 */
module.exports.createUser = (req, res, next) => {
  const {name, last_name, email, password} = req.body

  let errors = {};

  if (Validator.isEmpty(name)) {
    errors["name"] = "Nombre requerido"
  }

  if (Validator.isEmpty(last_name)) {
    errors["last_name"] = "Apellido requerido"
  }

  if (!Validator.validateEmail(email)) {
    errors["email"] = "Email no valido"
  }

  if (!Validator.validatePassword(password)) {
    errors["password"] = "Contraseña no valida"
  }

  if (Object.keys(errors).length > 0) {
    res.status(403).json({success: false, message: "Validaciones requeridas", errors})
    return
  }

  User.findOne({'email': email}).then(user => {
    //validamos si existe el usuario
    if (user !== null) {
      res.status(403).json({success: false, message: "El usuario ya existe"})
      return
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    //creamos el nuevo usuario
    const newUser = new User({
      name,
      last_name,
      email,
      password: hashPass
    })

    //guardamos el nuevo usuario
    newUser.save().then(newUser => {
      
    }).catch(ex => {
      res.status(500).json({ success: false, message: "Error al guardar, intenta de nuevo" })
    })
  }).catch(err => res.status(500).json({success: false, message: "Error al consultar usuario"}))
}

module.exports.login = (req, res, next) => {
  const {email, password} = req.body

  const errors = {}

  if (!Validator.validateEmail(email)) {
    errors['email'] = "Email no valido"
  }

  if (!Validator.validatePassword(password)) {
    errors['password'] = "Contraseña no valida"
  }

  if (Object.keys(errors).length > 0) {
    res.status(403).json({success: false, message: "Validaciones requeridas", errors})
  }
  
}