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

            // document.querySelector("#hand").innerHTML = "Cards in Hand: " + JSON.stringify(data["hand"], undefined, 2);
            // console.log(JSON.stringify(data["hand"], null, 2));

            document.querySelector("#board").innerHTML = "yourboard: " + JSON.stringify(data["board"]);
            let board = document.querySelector("#board");
            let databoard = data["board"];
            showcards(databoard, board);

            document.querySelector("#welcometext").innerHTML = "Welcome Text: " + data["welcomeText"];
            document.querySelector("#heroclass").innerHTML = "Hero Class: " + data["heroClass"];
            document.querySelector("#remainingcardcount").innerHTML = "Remaining Cards: " + data["remainingCardsCount"];

            // document.querySelector("#opusername").innerHTML = "user: " + data.opponent.username;
            // OP SIDE OF THE BOARD
            document.querySelector("#opusername").innerHTML = "user: " + data["opponent"]["username"];
            document.querySelector("#opclass").innerHTML = "heroclass: " + data.opponent.heroClass;
            document.querySelector("#ophp").innerHTML = "hp: " + data.opponent.hp;
            
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

            // ACTIONS
            document.querySelector("#lastestactions").innerHTML = "actions: " + JSON.stringify(data["latestActions"]);

            // BUTTONS
            const endturn = document.querySelector("#endturn");
            endturn.addEventListener('click', () => {
                gameaction("END_TURN");
            });

            const surrender = document.querySelector("#surrender");
            surrender.addEventListener('click', () => {
                gameaction("SURRENDER");
            });

            //DRAG
            document.addEventListener("dragstart", e =>{
                e.dataTransfer("Card", e.target.id);
                gameaction("PLAY")
            });

            // const dragcard = document.querySelector(".card")
            // dragcard.addEventListener('drag', e =>{
            //     gameaction("PLAY");
            // });

            document.addEventListener("drop", e=>{
                e.preventDefault;
                if (e.target.className == "droptarget"){
                    let dat = e.dataTransfer.getData("Card");
                    e.target.appendChild(document.getElementById(dat));
                }
            });

                        
            // HAND
            let hand = document.querySelector("#hand");
            let datahand = data["hand"];
            showcards(datahand, hand);

            
            // bhay de data 
            // $data["type"] = "END_TURN"; "SURRENDER"; "HERO_POWER"; "PLAY"; "ATTACK";
            // $data["uid"] = $_SESSION["uid"];
            // $data["uidattack"] = $_SESSION["uidattack"];
        }
        setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    });
}

function showcards(data, board){
    if (cardlength != data.length){
        board.innerHTML = "";
        data.forEach(cardjs => {
            const desc = cardjs.mechanics;
            const card = `<div draggable="true" id="dragcard" class="card">
                    <img src="img/i01_cat.jpg" alt="card img">
                    <div class="desc">${desc}</div>
                </div>`            
            const element = document.createElement('div');
            element.innerHTML = card;
            board.appendChild(element.firstChild);
        });
        cardlength = data.length;
    }
}

const gameaction = (e) => {
    let data = new FormData();

    data.append("type", e);

    fetch("ajax-action.php",{
        method : "post",
        body : data
    })
    .then(response => response.json())
};

window.addEventListener("load", () => {
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});