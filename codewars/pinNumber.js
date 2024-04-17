function validatePIN(pin) {
  pin = pin.split("");
  const num = "0123465789";
  const arrPin = num.split("");

  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  for (let i = 0; i < pin.length; i++) {
    if (!arrPin.includes(pin[i])) {
      return false;
    }
  }
  return true;
}
