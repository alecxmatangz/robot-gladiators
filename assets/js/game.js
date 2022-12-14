var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};



// FUNCTION EXPRESSION
// function(enemy.name) --> [enemy.name] is a variable parameter/placeholder that indicates how the variable will be used in the function
// AND matches with [enemy.name] in the fight function
var fight = function(enemy) {
    // Repeat and execute as long as the enemy-robot and player-robot are alive
    while(playerInfo.health > 0 && enemy.health > 0) {

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
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            break;
        }
    }

    // remove enemy's health by subtracting amount set in playerInfo.attack variable
    // Math.max (0, variable name) ensures that deducted values stop at 0
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    
    enemy.health = Math.max(0, enemy.health - damage);
    // log a resulting message on the console to see ene.health after playerInfo.attack
    console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );

    // check enemy's health
    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died.");

        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
        // leave while() loop since enemy is dead
        break;
    } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemy.attack value
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    // log a resulting message on the console to see playerInfo.health after enemy.attack
    console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

    // check and log playerInfo.health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died.");
        // leave while() loop if player is dead    
        break;
    } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
    } // end of while loop
}; // end of fight function 

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money! Broke ass bitch!");
        }
    },
    upgradeAttack: function(){
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money! Broke ass bitch!");
        }
    }
};

// Can also log multiple variables at once: console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

// var enemy.names = ["Tiffany New York Pollard", "Dwight Schrute", "Netty Cee" ];
var enemyInfo = [
    {
        name: "Tiffany 'New York' Pollard",
        attack: randomNumber(10, 14)
    },
    {
        name: "Dwight Schrute",
        attack: randomNumber(10, 14)
    },
    {
        name: "Obunga",
        attack: randomNumber(10, 14)
    }
];

// console.log(enemy.names); --> console shows names in an array
// console.log(enemy.names.length); --> console prints "3"
// console.log(enemy.names[0]); --> console prints Tiffany 'New York' Pollard
// console.log(enemy.names[1]); --> console prints Dwight Schrute
// console.log(enemy.names[2]); --> console prints Obunga

// function to START A NEW GAME
// startGame variable to run the game's loop multiple times
var startGame = function() {
    // reset player stats
    playerInfo.reset();
    
    for(var i = 0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            // let player know what round they are in (arrays start at 0 so add 1)
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            // pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];

            // reset ene.health before starting new fight
            // enemy.health = Math.floor(Math.random() * 21) + 40;
            pickedEnemyObj.health = randomNumber(40, 60);

            // use debugger to pause script from running and check what's going on at that moment in time
            // debugger;

            //pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);

            //if player's alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    
    // after the loop ends, we are either out of playerInfo.health or enemies, so run the endGame function
    endGame();
};

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job! You've survived the game! You now have a score of " + playerInfo.money + ".");
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
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store. We don't need your pennies anyways smh");

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

