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
        } else if (data == "LAST_GAME_WON") {  
            // header("Location: lobby.php");
            window.location.href = 'lobby.php';

        } else if (data == "LAST_GAME_LOST") {
            // header("Location: lobby.php");
            window.location.href = 'lobby.php';

        } else if (data == "INVALID_KEY") {
            // header("Location: index.php");  
            window.location.href = 'index.php';
        } else {    
            
            document.querySelector("#turntime").innerHTML = "Turn Time: " + data["remainingTurnTime"];
            document.querySelector("#yourturn").innerHTML = "Your turn: " + data["yourTurn"];
            document.querySelector("#heropowerused").innerHTML = "Power Used: " + data["heroPowerAlreadyUsed"];
            document.querySelector("#hp").innerHTML = "Health: " + data["hp"];
            document.querySelector("#maxhp").innerHTML = "Max HP: " + data["maxHp"];
            document.querySelector("#mp").innerHTML = "Magic: " + data["mp"];
            document.querySelector("#maxmp").innerHTML = "Max Magic: " + data["maxMp"];

            document.querySelector("#hand").innerHTML = "Cards in Hand: " + JSON.stringify(data["hand"]);

            document.querySelector("#board").innerHTML = "yourboard: " + JSON.stringify(data["board"]);

            document.querySelector("#welcometext").innerHTML = "Welcome Text: " + data["welcomeText"];
            document.querySelector("#heroclass").innerHTML = "Hero Class: " + data["heroClass"];
            document.querySelector("#remainingcardcount").innerHTML = "Remaining Cards: " + data["remainingCardsCount"];

            // document.querySelector("#opusername").innerHTML = "user: " + data.opponent.username;
            // OP SIDE OF THE BOARD
            document.querySelector("#opusername").innerHTML = "user: " + data["opponent"]["username"];
            document.querySelector("#opclass").innerHTML = "heroclass: " + data.opponent.heroClass;
            document.querySelector("#ophp").innerHTML = "hp: " + data.opponent.hp;
            document.querySelector("#opboard").innerHTML = "opboard: " + JSON.stringify(data.opponent.board);
            document.querySelector("#optext").innerHTML = "welcometext: " + data.opponent.welcomeText;
            document.querySelector("#opcardcount").innerHTML = "card count: " + data.opponent.remainingCardsCount;
            document.querySelector("#optrophycount").innerHTML = "trophy count: " + data.opponent.trophyCount;
            document.querySelector("#opwincount").innerHTML = "win count: " + data.opponent.winCount;
            document.querySelector("#oplosscount").innerHTML = "loss count: " + data.opponent.lossCount;
            document.querySelector("#optalent").innerHTML = "talent: " + data.opponent.talent;

            // ACTIONS
            document.querySelector("#lastestactions").innerHTML = "actions: " + JSON.stringify(data["latestActions"]);

            
            // bhay de data 
            // $data["type"] = "END_TURN";
            // $data["type"] = "SURRENDER";
            // $data["type"] = "HERO_POWER";
            // $data["type"] = "PLAY";
            // $data["uid"] = $_SESSION["uid"];
            // $data["type"] = "ATTACK";
            // $data["uidattack"] = $_SESSION["uidattack"];
        }
        setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    });
    
}

const action = () => {
    fetch("game.php", { // Il faut créer cette page et son contrôleur appelle
        method : "GET" // l’API (games/action)
    })
    // .then(response => response.json())
    .then(action => {
        console.log("test");

        // if (action == "END_TURN"){
        //     $data["type"] = action;
        // }
    });
}

// const cardsjs = document.querySelectorAll("card");
// const button = document.querySelector("button")
// button.addEventListener('click', (e) => {

// });

// cardsjs.forEach(cardjs => {
//     cardjs.addEventListener('drag', (e) =>{
//         const index = Array.from(cardsjs).indexOf(e.target);
//         const indes = Array.from(cardsjs).toString;
//         console.log(index)
//         console.log(indes)
//     })
// });

window.addEventListener("load", () => {
    setTimeout(state, action, 1000); // Appel initial (attendre 1 seconde)
});