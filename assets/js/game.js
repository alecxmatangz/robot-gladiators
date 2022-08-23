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
// console.log(enemyNames[0]); --> console prints Roberto
// console.log(enemyNames[1]); --> console prints Amy Android
// console.log(enemyNames[2]); --> console prints Robo Trumble
// console.log(enemyNames.length); --> console prints "3"

// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index.");
// } 

// FUNCTION EXPRESSION
// function(enemyName) --> [enemyName] is a variable parameter/placeholder that indicates how the variable will be used in the function
// AND matches with [enemyName] in the fight function
var fight = function(enemyName) {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // promptFight variable to check if the player wants to fight or skip the battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // console.log to read back the response of promptFight to make sure it's working
    console.log(promptFight);

    // conditional to determine whether the fight will start or not
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting amount set in playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        // log a resulting message on the console to see enemyHealth after playerAttack
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died.");
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
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
            console.log(playerMoney);
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again.");
    }
};

// fight();
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

// FUNCTION DECLARATION
// function fight () {
//     window.alert("Welcome to Robot Gladiators!");
// }

// fight();
