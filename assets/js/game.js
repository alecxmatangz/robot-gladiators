var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple variables at once like this
// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble" ];
var enemyHealth = 50;
var enemyAttack = 12;

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
    // Repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {

    // promptFight variable to check if the player wants to fight or skip the battle
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
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }

    // remove enemy's health by subtracting amount set in playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
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
    playerHealth = playerHealth - enemyAttack;
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

// fight();
for(var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth >0) {
        // let player know what round they are in (arrays start at 0 so add 1)
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset enemyHealth before starting new fight
        enemyHealth = 50;

        // use debugger to pause script from running and check what's going on at that moment in time
        // debugger;

        //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
    }
    //if the player isn't alive, stop the game
    else {
        window.alert('You have lost your robot in battle! Game over.');
        break;
    }
}

//  if function fight() was a FUNCTION DECLARATION
// function fight () {
//     window.alert("Welcome to Robot Gladiators!");
// }

// fight();
