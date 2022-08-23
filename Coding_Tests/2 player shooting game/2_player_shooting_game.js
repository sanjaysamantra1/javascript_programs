

function startGame() {
  console.log("game started");

  let player1Health = 100;
  let player2Health = 100;
  let p1WinCount = 0;
  let p2WinCount = 0;

  for (let round = 1; round <= 5; round++) {
    let p1_power = Math.floor(Math.random() * 6);
    player2Health = player2Health - p1_power;

    let p2_power = Math.floor(Math.random() * 6);
    player1Health = player1Health - p2_power;

    if (p1_power > p2_power) {
      console.log("p1 won");
      p1WinCount++;
    } else {
      console.log("p2 won");
      p2WinCount++;
    }
    if (p1WinCount >= 3 || p2WinCount >= 3) {
      const winner = p1WinCount > p2WinCount ? "player-1" : "player-2";
      console.log(`game over after ${round} rounds and winner is ${winner}`);
      break;
    }
  }
}
