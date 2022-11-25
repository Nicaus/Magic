let len = 0;
let cardlength = null;
let storedid = null;

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
            window.location.href = 'lobby.php';

        } else if (data == "LAST_GAME_LOST") {
            window.location.href = 'lobby.php';

        } else if (data == "INVALID_KEY") {
            window.location.href = 'index.php';

        } else {    
            
            document.querySelector("#turntime").innerHTML = "Turn Time: " + data["remainingTurnTime"];
            document.querySelector("#yourturn").innerHTML = "Your turn: " + data["yourTurn"];
            document.querySelector("#heropowerused").innerHTML = "Power Used: " + data["heroPowerAlreadyUsed"];
            document.querySelector("#hp").innerHTML = "Health: " + data["hp"];
            document.querySelector("#maxhp").innerHTML = "Max HP: " + data["maxHp"];
            document.querySelector("#mp").innerHTML = "Magic: " + data["mp"];
            document.querySelector("#maxmp").innerHTML = "Max Magic: " + data["maxMp"];


            // CARDS ON BOARD
            document.querySelector("#board").innerHTML = "yourboard: " + JSON.stringify(data["board"]);
            let board = document.querySelector("#board");
            let databoard = data["board"];
            showcards(databoard, board);

            document.querySelector("#welcometext").innerHTML = "Welcome Text: " + data["welcomeText"];
            document.querySelector("#heroclass").innerHTML = "Hero Class: " + data["heroClass"];
            document.querySelector("#remainingcardcount").innerHTML = "Remaining Cards: " + data["remainingCardsCount"];

            // OP SIDE OF THE BOARD
            document.querySelector("#opusername").innerHTML = "user: " + data["opponent"]["username"];
            document.querySelector("#opclass").innerHTML = "heroclass: " + data.opponent.heroClass;
            document.querySelector("#ophp").innerHTML = "hp: " + data.opponent.hp;
            
            // OPPONENT CARDS
            document.querySelector("#opboard").innerHTML = "opboard: " + JSON.stringify(data.opponent.board);
            let opboard = document.querySelector("#opboard");
            let dataopboard = data.opponent.board;
            showcards(dataopboard, opboard);
            
            document.querySelector("#optext").innerHTML = "welcometext: " + data.opponent.welcomeText;
            document.querySelector("#opcardcount").innerHTML = "card count: " + data.opponent.remainingCardsCount;
            document.querySelector("#optrophycount").innerHTML = "trophy count: " + data.opponent.trophyCount;
            document.querySelector("#opwincount").innerHTML = "win count: " + data.opponent.winCount;
            document.querySelector("#oplosscount").innerHTML = "loss count: " + data.opponent.lossCount;
            document.querySelector("#optalent").innerHTML = "talent: " + data.opponent.talent;

            // HAND
            let hand = document.querySelector("#hand");
            let datahand = data["hand"];
            showcards(datahand, hand);
            // ACTIONS
            

            // BUTTON ACTIONS
            const endturn = document.querySelector("#endturn");
            endturn.onclick = () => {
                gameaction("END_TURN", '');
            };

            const surrender = document.querySelector("#surrender");
            surrender.onclick = () => {
                gameaction("SURRENDER", '');
            };

            // CARD ACTIONS
            const handcards = hand.querySelectorAll(".card");
            handcards.forEach( c => {
                c.onclick = e =>{
                    console.log(e.target.id);
                    gameaction("PLAY", e.target.id);
                }
            });

            const boardcards = board.querySelectorAll(".bcards");
            boardcards.forEach( c => {
                c.onclick = e =>{
                    console.log(e.target.id);
                    gameaction("ATTACK", e.target.id);
                }
            });

            const oppcards = board.querySelectorAll(".ocards");
            oppcards.forEach( c => {
                c.onclick = e =>{
                    console.log(e.target.id);
                    gameaction("ATTACK", e.target.id);
                }
            });
                    
            // document.querySelector("#lastestactions").innerHTML = "actions: " + JSON.stringify(data["latestActions"]);
        }
        setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    });
}

function showcards(data, board){
    if (cardlength != data.length){
        board.innerHTML = "";
        data.forEach(cardjs => {
            const desc = cardjs.mechanics;
            const uid = cardjs.uid;
            const card = `<div id="${uid}" class="card">
                    <img id="${uid}" src="img/i01_cat.jpg" alt="card img">
                    <div id="${uid}" class="desc" style="overflow-wrap: break-all;">${desc}</div>
                </div>`            
            const element = document.createElement('div');
            element.innerHTML = card;
            board.appendChild(element.firstChild);
        });
        cardlength = data.length;
    }
}

const gameaction = (e, uid) => {
    let data = new FormData();

    if (e == "END_TURN" || e == "SURRENDER" || e == "HERO_PLAY"){
        data.append("type", e);
    } else if (e == "PLAY"){
        data.append("type", e);
        data.append("uid", uid);
    } else if (e == "ATTACK"){
        data.append("type", e);
        data.append("targetuid", uid)
    }

    fetch("ajax-action.php",{
        method : "post",
        body : data
    })
    .then(response => response.json())
};

window.addEventListener("load", () => {
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});