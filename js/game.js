let len = 0;
let cardlength = null;
let storedid = null;
let uid = "";
let error = "";

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
            blur();
            alert("YOU WON :)");
            setTimeout(1000);
            window.location.href = 'lobby.php';

        } else if (data == "LAST_GAME_LOST") {
            blur();
            alert("YOU LOST ;(");
            setTimeout(1000);
            window.location.href = 'lobby.php';

        } else if (data == "INVALID_KEY") {
            blur();
            alert("CLÉ INVALIDE");
            setTimeout(1000);
            window.location.href = 'index.php';

        } else {    
            switch(data){
                case "INVALID_KEY":
                    error = "Clé invalide, deloggez-vous et ressayez"; break;
                case "INVALID_ACTION":
                    error = "Action invalide"; break;
                case "ACTION_IS_NOT_AN_OBJECT":
                    error = "Votre action n'est pas un objet!"; break;
                case "NOT_ENOUGH_ENERGY":
                    error = "Pas assez d'énergie ;("; break;
                case "BOARD_IS_FULL ":
                    error = "Trop de carte en jeu "; break;
                case "CARD_NOT_IN_HAND":
                    error = "Il n'y a pas de carte dans votre main"; break;
                case "CARD_IS_SLEEPING":
                    error = "Carte endormie"; break;
                case "MUST_ATTACK_TAUNT_FIRST":
                    error = "Attacker le Taunt en premier"; break;
                case "OPPONENT_CARD_NOT_FOUND":
                    error = "Carte visé n'existe pas"; break;
                case "OPPONENT_CARD_HAS_STEALTH":
                    error = "Carte visé est invisible"; break;
                case "CARD_NOT_FOUND":
                    error = "Carte non trouvé"; break;
                case "ERROR_PROCESSING_ACTION":
                    error = "Votre action n'a pas été traité"; break;
                case "INTERNAL_ACTION_ERROR":
                    error = "Erreur interne"; break;
                case "HERO_POWER_ALREADY_USED":
                    error = "Hero Power a déja été utilisé"; break;
            }

            document.querySelector("#turntime").innerHTML = data["remainingTurnTime"];
            document.querySelector("#yourturn").innerHTML = "Your turn: " + data["yourTurn"];
            document.querySelector("#heropowerused").innerHTML = "Power Used: " + data["heroPowerAlreadyUsed"];
            document.querySelector("#hp").innerHTML = data["hp"];
            document.querySelector("#mp").innerHTML = data["mp"];
            // document.querySelector("#maxhp").innerHTML = "Max HP: " + data["maxHp"];
            // document.querySelector("#maxmp").innerHTML = "Max Magic: " + data["maxMp"];
            // document.querySelector("#error").innerHTML = "Error: " + error;
            // document.querySelector("#welcometext").innerHTML = "Welcome Text: " + data["welcomeText"];
            document.querySelector("#heroclass").innerHTML = "Hero Class: " + data["heroClass"];
            document.querySelector("#remainingcardcount").innerHTML = data["remainingCardsCount"];

            // OP SIDE OF THE BOARD
            document.querySelector("#opusername").innerHTML = data["opponent"]["username"];
            document.querySelector("#opclass").innerHTML = data.opponent.heroClass;
            document.querySelector("#optext").innerHTML = data.opponent.welcomeText;
            document.querySelector("#opcardcount").innerHTML = data.opponent.remainingCardsCount;
            document.querySelector("#opmp").innerHTML = data.opponent.mp;
            document.querySelector("#ophp").innerHTML = data.opponent.hp;

            // document.querySelector("#optrophycount").innerHTML = "trophy count: " + data.opponent.trophyCount;
            // document.querySelector("#opwincount").innerHTML = "win count: " + data.opponent.winCount;
            // document.querySelector("#oplosscount").innerHTML = "loss count: " + data.opponent.lossCount;
            // document.querySelector("#optalent").innerHTML = "talent: " + data.opponent.talent;

            // HAND
            let hand = document.querySelector("#hand");
            let datahand = data["hand"];
            showcards(datahand, hand, "hcards");

            // CARDS ON BOARD
            let board = document.querySelector("#board");
            let databoard = data["board"];
            showcards(databoard, board, "bcards");

            // OPPONENT CARDS
            let opboard = document.querySelector("#opboard");
            let dataopboard = data.opponent.board;
            showcards(dataopboard, opboard, "ocards");

            // ACTIONS / ONCLICK
            // BUTTON 
            const endturn = document.querySelector("#endturn");
            endturn.onclick = () => {
                gameaction("END_TURN", '', '');
            };

            const surrender = document.querySelector("#surrender");
            surrender.onclick = () => {
                gameaction("SURRENDER", '', '');
            };

            // CARD 
            const handcards = hand.querySelectorAll(".hcards");
            handcards.forEach( c => {
                c.onclick = e =>{
                    console.log(e.target.id);
                    gameaction("PLAY", e.target.id, '');
                }
            });

            const boardcards = board.querySelectorAll(".bcards");
            boardcards.forEach( c => {
                c.onclick = e =>{
                    console.log(e.target.id);
                    uid = e.target.id;
                }
            });

            const oppcards = opboard.querySelectorAll(".ocards");
            oppcards.forEach( c => {
                c.onclick = e =>{
                    console.log(e.target.id);
                    gameaction("ATTACK", uid, e.target.id);
                    uid = "";
                }
            });

            const hero = document.querySelector("#opponentinfo");
            hero.onclick = () =>{
                console.log("op");
                gameaction("ATTACK", uid, "0");
                uid = "";
            };
                    
            // document.querySelector("#lastestactions").innerHTML = "actions: " + JSON.stringify(data["latestActions"]);
        }
        setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    });
}

function showcards(data, board, c){
    if (cardlength != data.length){
        board.innerHTML = "";
        data.forEach(cardjs => {
            let desc = cardjs.mechanics;
            const uid = cardjs.uid;
            const cost = cardjs.cost;
            const hpp = cardjs.hp;
            const atk = cardjs.atk;
            const name = c;

            if (desc == ""){
                desc = "Minion";
            }    
        
            const card = `<div id="${uid}" class="card ${name}">
                <div class="imgcon"><div id="${uid}" class="image"></div></div>
                <div id="${uid}" class="cinfo">
                    <div id="${uid}" class="cost middle">
                        ${cost}
                    </div>
                    <div id="${uid}" class="hpp middle">
                        ${hpp}
                    </div>
                    <div id="${uid}" class="atk middle">
                        ${atk}
                    </div>
                </div>
                <div id="${uid}" class="desc">${desc}</div>
            </div>`
            const element = document.createElement('div');
            element.innerHTML = card;
            board.appendChild(element.firstChild);
        });
        cardlength = data.length;
    }
}

const gameaction = (e, uid, targetuid) => {
    let data = new FormData();

    if (e == "END_TURN" || e == "SURRENDER" || e == "HERO_PLAY"){
        data.append("type", e);
        data.append("uid", "");
        data.append("targetuid", "");
    } else if (e == "PLAY"){
        data.append("type", e);
        data.append("uid", uid);
        data.append("targetuid", "");
    } else if (e == "ATTACK"){
        data.append("type", e);
        data.append("uid", uid);
        data.append("targetuid", targetuid);
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