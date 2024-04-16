function alphabetPosition(text) {
  let lowerText = text.toLowerCase(text);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = [];

  for (let i = 0; i < lowerText.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (lowerText[i] === alphabet[j]) {
        result.push(j + 1);
      }
    }
  }
  return result.join(" ");
}
