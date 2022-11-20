<?php
    require_once('action/GameAction.php');

    $action = new GameAction();
    $data = $action->execute();

    require_once('partial/header.php');

?>
<script src="./js/game.js"></script>
<link rel="stylesheet" href="css/game.css" />

<div onload="state()">
    <div class="row evendiv">
        <br>
        <div id="opusername"></div>
        <div id="opclass"></div>
        <div id="ophp"></div>
        <div id="opmaxhp"></div>
        <div id="opmp"></div>
        <div id="opmaxmp"></div>
        <div id="optext"></div>
        <div id="opcardcount"></div>
        <div id="ophandsize"></div>
        <div id="optrophycount"></div>
        <div id="opwincount"></div>
        <div id="oplosscount"></div>
        <div id="optalent"></div>
    </div>
    
    
    <div class="row">
        <br>
        <div id="opboard" class="evendiv">
        </div>
    </div>


    <div class="row">
        <div id="yourboard">
            <div id="board" class="evendiv droptarget">
                <p></p>
            </div>
        </div>
    </div>    
    

    <div class="row">
        <div class="evendiv">
            <div id="info" style="background-color;">
                <br>    
                <div id="turntime"></div>
                <div id="yourturn"></div>
                <div id="heropowerused"></div>
                <div id="hp"></div>
                <div id="maxhp"></div>
                <div id="mp"></div>
                <div id="maxmp"></div>
                <div id="welcometext"></div>
                <div id="heroclass"></div>
                <div id="talent"></div>
                <div id="remainingcardcount"></div>

                
            </div>    
        
            <div id="yourhand">
                <div id="hand" class="evendiv">
                </div>
            </div>
    
            <div id="buttons" action="" method="post">
                <button id="endturn" name="endturn" class="b">End Turn</button>
                <button id="surrender" name="surrender" class="b">Surrender</button>
            </div>
        </div>
    </div>

    <div id="actionlist">
        <div id="lastestactions"></div>
    </div>

    
</div>

<?php
    require_once('partial/footer.php');