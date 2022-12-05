let len = 0;
let cardlength = null;
let storedid = null;
let uid = "";

const state = () => {
    fetch("ajax-state.php", { 
        method : "POST"
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); 

        if (data == "WAITING") { 

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
                    document.querySelector("#error").innerHTML = "Clé invalide, deloggez-vous et ressayez"; break;
                case "INVALID_ACTION":
                    document.querySelector("#error").innerHTML = "Action invalide"; break;
                case "ACTION_IS_NOT_AN_OBJECT":
                    document.querySelector("#error").innerHTML = "Votre action n'est pas un objet!"; break;
                case "NOT_ENOUGH_ENERGY":
                    document.querySelector("#error").innerHTML = "Pas assez d'énergie ;("; break;
                case "BOARD_IS_FULL ":
                    document.querySelector("#error").innerHTML = "Trop de carte en jeu "; break;
                case "CARD_NOT_IN_HAND":
                    document.querySelector("#error").innerHTML = "Il n'y a pas de carte dans votre main"; break;
                case "CARD_IS_SLEEPING":
                    document.querySelector("#error").innerHTML = "Carte endormie"; break;
                case "MUST_ATTACK_TAUNT_FIRST":
                    document.querySelector("#error").innerHTML = "Attacker le Taunt en premier"; break;
                case "OPPONENT_CARD_NOT_FOUND":
                    document.querySelector("#error").innerHTML = "Carte visé n'existe pas"; break;
                case "OPPONENT_CARD_HAS_STEALTH":
                    document.querySelector("#error").innerHTML = "Carte visé est invisible"; break;
                case "CARD_NOT_FOUND":
                    document.querySelector("#error").innerHTML = "Carte non trouvé"; break;
                case "ERROR_PROCESSING_ACTION":
                    document.querySelector("#error").innerHTML = "Votre action n'a pas été traité"; break;
                case "INTERNAL_ACTION_ERROR":
                    document.querySelector("#error").innerHTML = "Erreur interne"; break;
                case "HERO_POWER_ALREADY_USED":
                    document.querySelector("#error").innerHTML = "Hero Power a déja été utilisé"; break;
            }

            document.querySelector("#turntime").innerHTML = data["remainingTurnTime"];
            document.querySelector("#yourturn").innerHTML = "Your turn: " + data["yourTurn"];
            document.querySelector("#heropowerused").innerHTML = "Power Used: " + data["heroPowerAlreadyUsed"];
            document.querySelector("#hp").innerHTML = data["hp"];
            document.querySelector("#mp").innerHTML = data["mp"];
            document.querySelector("#heroclass").innerHTML = "Hero Class: " + data["heroClass"];
            document.querySelector("#remainingcardcount").innerHTML = data["remainingCardsCount"];

            // OP SIDE OF THE BOARD
            document.querySelector("#opusername").innerHTML = data["opponent"]["username"];
            document.querySelector("#opclass").innerHTML = data.opponent.heroClass;
            document.querySelector("#optext").innerHTML = data.opponent.welcomeText;
            document.querySelector("#opcardcount").innerHTML = data.opponent.remainingCardsCount;
            document.querySelector("#opmp").innerHTML = data.opponent.mp;
            document.querySelector("#ophp").innerHTML = data.opponent.hp;

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
                    let cid = e.target.id
                    len++;
                    console.log(cid);
                    gameaction("PLAY", cid, '');
                    db(cid);
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

const db = (uid) => {
    let data = new FormData();
    
    data.append(uid)

    fetch("ajax-stats.php", {
        method : "post",
        body: data
    })
    .then(response => response.json())
};

window.addEventListener("load", () => {
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});