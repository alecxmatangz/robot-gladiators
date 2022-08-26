var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple variables at once like this
// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Tiffany New York Pollard", "Dwight Schrute", "Netty Cee" ];
var enemyHealth = 50;
var enemyAttack = 12;

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};
// console.log(enemyNames); --> console shows names in an array
// console.log(enemyNames.length); --> console prints "3"
// console.log(enemyNames[0]); --> console prints Roberto
// console.log(enemyNames[1]); --> console prints Amy Android
// console.log(enemyNames[2]); --> console prints Robo Trumble


// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index.");
// } 

// FUNCTION EXPRESSION
// function(enemyName) --> [enemyName] is a variable parameter/placeholder that indicates how the variable will be used in the function
// AND matches with [enemyName] in the fight function
var fight = function(enemyName) {
    // Repeat and execute as long as the enemy-robot and player-robot are alive
    while(playerHealth > 0 && enemyHealth > 0) {

    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // console.log to read back the response of promptFight to make sure it's working
    console.log(promptFight);

    // conditional to determine whether the fight was skipped or not
    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break;
        }
    }

    // remove enemy's health by subtracting amount set in playerAttack variable
    // Math.max (0, variable name) ensures that deducted values stop at 0
    var damage = randomNumber(playerAttack - 3, playerAttack);
    
    enemyHealth = Math.max(0, enemyHealth - damage);
    // log a resulting message on the console to see enemyHealth after playerAttack
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died.");

        // award player money for winning
        playerMoney = playerMoney + 20;
        // leave while() loop since enemy is dead
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack value
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    
    playerHealth = Math.max(0, playerHealth - damage);
    // log a resulting message on the console to see playerHealth after enemyAttack
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check and log playerHealth
    if (playerHealth <= 0) {
        window.alert(playerName + " has died.");
        // leave while() loop if player is dead    
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    } // end of while loop
}; // end of fight function 

// function to start a new game
// startGame variable to run the game's loop multiple times
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    
    for(var i = 0; i < enemyNames.length; i++) {
        // if player is still alive, keep fighting
        if (playerHealth > 0) {
            // let player know what round they are in (arrays start at 0 so add 1)
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before starting new fight
            // enemyHealth = Math.floor(Math.random() * 21) + 40;
            enemyHealth = randomNumber(40, 60);

            // use debugger to pause script from running and check what's going on at that moment in time
            // debugger;

            //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);

            //if player's alive and we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round!");

                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }
        //if the player isn't alive, stop the game
        else {
            window.alert('You have lost your robot in battle! Game over.');
            break;
        }
    }
    
    // after the loop ends, we are either out of playerHealth or enemies, so run the endGame function
    endGame();
};

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job! You've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon.");
    }
};

var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money. Broke ass bitch!");
            }

            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money. Broke ass bitch!");
            }

            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

// start first game when page loads
startGame();

