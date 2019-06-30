class ValidatorHelper {

  /**
   * Return if a string is null or empty
   * 
   * @param {string} str
   */
  isEmpty(str) {
    if (str == null){
      return true
    } 

    if (str.trim().length == 0) {
      return true
    }
    
    return false
  }

  /**
   * 
   * Password validation
   * 
   * Validates if a valid password, this method validate if the password is empty too
   * 
   * (?=.*\d) -> Debe contener un número
   * (?=.*[a-z]) -> Debe contener una letra minuscula
   * (?=.*[A-Z]) -> Debe contener una letra mayúscula
   * [a-zA-Z0-9]{8,} -> Debe ser 8 caracteres como minimo
   * 
   * @param {string} password
   */
  validatePassword(password) {
    if (this.isEmpty(password)) {
      return false
    }

    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).[A-Za-z0-9]{8,}$/.test(password)
  }

  /**
   * 
   * Validates if is a valid email, this method also validate if the email param is empty.
   * @param {string} email 
   * 
   */
  validateEmail(email) {
    if (this.isEmpty(email)) {
      return false
    }

    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
  }

}

const Validator = new ValidatorHelper()

module.exports = Validator
