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
            document.querySelector("#state").innerHTML = data["remainingTurnTime"];
        }
        setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    });
    
}

window.addEventListener("load", () => {
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});