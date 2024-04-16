const rps = (p1, p2) => {
  const result = ["Draw!", "Player 1 won!", "Player 2 won!"];
  if (p1 === p2) {
    return result[0];
  }
  if (p1 === "rock") {
    if (p2 === "paper") {
      return result[2];
    }
    if (p2 === "scissors") {
      return result[1];
    }
  }

  if (p1 === "paper") {
    if (p2 === "rock") {
      return result[1];
    }
    if (p2 === "scissors") {
      return result[2];
    }
  }

  if (p1 === "scissors") {
    if (p2 === "paper") {
      return result[1];
    }
    if (p2 === "rock") {
      return result[2];
    }
  }
};
