// var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function
  // repeat and execute as long as the enemy-robot is alive
  var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
      // as a player if they want to quit
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

   // if player chooses to skip confirm then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log('playerMoney' , playerMoney);
      break;
    }
  }
 
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      break;
      // add the shop feature which will prompt the player and give them the option to REFILL health, or upgrade attack when they defeat an enemy
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
      // add the option to play again after the player dies
      // get the loop to restart back at the Robot-Name prompt
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
}

// run fight function to start game
// function to start a new game
var startGame = function() {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    // let player know what round they are in
    window.alert('Welcome to Robot Gladiators! Round' + ( i + 1 ));

    // pick new enemy to fight based on the index in enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemy health before starting new fight
    
    enemyHealth = 50;
  } else {
    window.alert('You have lost your robot in battle! Game Over!')
    break;
  }
  
    // call fight function with enemy-robot
  fight(pickedEnemyName);
  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
};

// play again
// startGame();
};

// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
window.alert("The game has now ended. Let's see how you did!");

// ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");
if (playAgainConfirm) {
  // restart the game
  startGame();
}
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!")
}
};

// start the game when the page loads
startGame();
