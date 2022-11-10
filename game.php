<?php
    require_once('action/GameAction.php');

    $action = new GameAction();
    $data = $action->execute();

    require_once('partial/header.php');
?>
<script src="./js/game.js"></script>
<div onload="state()">
    <div id="test"></div>
    <br>    
    <div id="turntime"></div>
    <div id="yourturn"></div>
    <div id="heropowerused"></div>
    <div id="hp"></div>
    <div id="maxhp"></div>
    <div id="mp"></div>
    <div id="maxmp"></div>
    
    <br>
    <div id="hand">
        <div id="handcard1"></div>
    </div>

    <br>
    <div id="board">
        <div id="boardcard1"></div>
    </div>

    <br>
    <div id="welcometext"></div>
    <div id="heroclass"></div>
    <div id="talent"></div>
    <div id="remainingcardcount"></div>

    <br>
    <div>OPPONENT</div>
    <div id="opusername"></div>
    <div id="opclass"></div>
    <div id="ophp"></div>
    <div id="opmaxhp"></div>
    <div id="opmp"></div>
    <div id="opmaxmp"></div>
    <div id="opboard">
        <div id="opcard1"></div>
    </div>
    <div id="optext"></div>
    <div id="opcardcount"></div>
    <div id="ophandsize"></div>
    <div id="optrophycount"></div>
    <div id="opwincount"></div>
    <div id="oplosscount"></div>
    <div id="optalent"></div>

    <br>
    <div id="lastestactions"></div>
</div>

<?php
    require_once('partial/footer.php');