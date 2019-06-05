function validatePIN (pin) {
    //return true or false
    if((pin.length === 4 || pin.length === 6) && pin.match(/^[0-9]+$/)){
        return true
    }
    return false;
  }