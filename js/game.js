const state = () => {
    fetch("ajax-state.php", { // Il faut créer cette page et son contrôleur appelle
        method : "POST" // l’API (games/state)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // contient les cartes/état du jeu.

        if (data == "WAITING") { 
            // header("Location: ajax-state.php");
            // $_SESSION["state"] = data;
        } 
        else if (data == "LAST_GAME_WON") {  
            // header("Location: lobby.php");
            window.location.href = 'lobby.php';

        } else if (data == "LAST_GAME_LOST") {
            // header("Location: lobby.php");
            window.location.href = 'lobby.php';

        } else if (data == "INVALID_KEY") {
            // header("Location: index.php");  
            window.location.href = 'index.php';
        }
        else{
            document.querySelector("#test").innerHTML = data.opponent.heroClass;
            
            document.querySelector("#turntime").innerHTML = "Turn Time: " + data["remainingTurnTime"];
            document.querySelector("#yourturn").innerHTML = "Your turn: " + data["yourTurn"];
            document.querySelector("#heropowerused").innerHTML = "Power Used: " + data["heroPowerAlreadyUsed"];
            document.querySelector("#hp").innerHTML = "Health: " + data["hp"];
            document.querySelector("#maxhp").innerHTML = "Max HP: " + data["maxHp"];
            document.querySelector("#mp").innerHTML = "Magic: " + data["mp"];
            document.querySelector("#maxmp").innerHTML = "Max Magic: " + data["maxMp"];

            document.querySelector("#hand").innerHTML = "Cards in Hand: " + JSON.stringify(data["hand"]);

            document.querySelector("#board").innerHTML = "Board: " + JSON.stringify(data["board"]);

            document.querySelector("#welcometext").innerHTML = "Welcome Text: " + data["welcomeText"];
            document.querySelector("#heroclass").innerHTML = "Hero Class: " + data["heroClass"];
            document.querySelector("#remainingcardcount").innerHTML = "Remaining Cards: " + data["remainingCardsCount"];

            document.querySelector("#opusername").innerHTML = "user: " + data.opponent.username;
            document.querySelector("#opclass").innerHTML = "heroclass: " + data.opponent.heroClass;
            document.querySelector("#ophp").innerHTML = "hp" + data.opponent.hp;
            document.querySelector("#opboard").innerHTML = "board" + data.opponent.board;
            document.querySelector("#optext").innerHTML = "welcometext: " + data.opponent.welcomeText;
            document.querySelector("#opcardcount").innerHTML = "card count: " + data.opponent.remainingCardsCount;
            document.querySelector("#optrophycount").innerHTML = "trophy count: " + data.opponent.trophyCount;
            document.querySelector("#opwincount").innerHTML = "win count: " + data.opponent.winCount;
            document.querySelector("#oplosscount").innerHTML = "loss count: " + data.opponent.lossCount;
            document.querySelector("#optalent").innerHTML = "talent: " + data.opponent.talent;

            document.querySelector("#lastestactions").innerHTML = "actions: " + JSON.stringify(data["latestActions"]);
        }
        setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    });
    
}

window.addEventListener("load", () => {
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});