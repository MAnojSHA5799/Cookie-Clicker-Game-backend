// Function to handle click logic
const handleClick = (player) => {
    const randomChance = Math.random();
    let message = "You gained 1 point!";
    
    // 50% chance to get 10 points
    if (randomChance < 0.5) {
      player.score += 10;
      message = "You gained 10 points!";
    }
    // 25% chance to win a prize
    else if (randomChance < 0.75) {
      player.prizesWon += 1;
      message = "You won a prize!";
    } else {
      player.score += 1;
    }
  
    return { message, score: player.score, prizesWon: player.prizesWon };
  };
  
  module.exports = { handleClick };
  