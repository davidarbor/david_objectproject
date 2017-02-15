/**
 * Created by h205p2 on 12/12/16.
 */
function beginAdventure(){
    var nameArea=document.getElementById("nameArea").value;
    user=new Character(nameArea);
    console.log(user);
    $('#nameArea').hide();
    $('.wrapper').hide();
    var startTown=new Area("Starting Town", 2);
    $('#openingMessage').fadeIn(3000);
    $('#openingMessage').fadeOut(500);
    $('#chooseTeam').show();
}

function chooseTeam(){
    $('#openingMessage').hide();
    $('#chooseDecidueye').show();
    $('#chooseIncineroar').show();
    $('#choosePrimarina').show();
    $('#chooseCrabominable').show();
    $('#chooseOranguru').show();
    $('#chooseVikavolt').show();
    $('#decidueyeSelectOutput').show();
    $('#incineroarSelectOutput').show();
    $('#primarinaSelectOutput').show();
    $('#crabominableSelectOutput').show();
    $('#oranguruSelectOutput').show();
    $('#vikavoltSelectOutput').show();
    $('#confirmTeam').show();
    $('#chooseTeam').hide();
    $('#teamMessage').fadeIn(2000);
}

$(document).ready(function(){
    $('#decidueyeSelectOutput').html("<img width='180' height='180' src='" + decidueye.selectionImage + "'>");
    $('#incineroarSelectOutput').html("<img width='180' height='180'  src='" + incineroar.selectionImage + "'>");
    $('#primarinaSelectOutput').html("<img width='180' height='180'  src='" + primarina.selectionImage + "'>");
    $('#crabominableSelectOutput').html("<img width='219.5' height='219.5' src='" + crabominable.selectionImage + "'>");
    $('#oranguruSelectOutput').html("<img width='180' height='180' src='" + oranguru.selectionImage + "'>");
    $('#vikavoltSelectOutput').html("<img width='180' height='180' src='" + vikavolt.selectionImage + "'>");
});

$(document).ready(function(){
    $('#decidueyeBattleOutput').html("<img width='100' height='100' src='" + decidueye.battleImage + "'>");
    $('#incineroarBattleOutput').html("<img width='100' height='100' src='" + incineroar.battleImage + "'>");
    $('#primarinaBattleOutput').html("<img width='100' height='100' src='" + primarina.battleImage + "'>");
    $('#crabominableBattleOutput').html("<img width='100' height='100' src='" + crabominable.battleImage + "'>");
    $('#oranguruBattleOutput').html("<img width='100' height='100' src='" + oranguru.battleImage + "'>");
    $('#vikavoltBattleOutput').html("<img width='100' height='100' src='" + vikavolt.battleImage + "'>");
    $('#nihilegoBattleOutput').html("<img width='110' height='100' src='" + nihilego.battleImage + "'>");
    $('#buzzwoleBattleOutput').html("<img width='140' height='150' src='" + buzzwole.battleImage + "'>");
    $('#pheromosaBattleOutput').html("<img width='100' height='170' src='" + pheromosa.battleImage + "'>");
    $('#xurkitreeBattleOutput').html("<img width='150' height='150' src='" + xurkitree.battleImage + "'>");
    $('#kartanaBattleOutput').html("<img width='140' height='90' src='" + kartana.battleImage + "'>");
    $('#celesteelaBattleOutput').html("<img width='210' height='200' src='" + celesteela.battleImage + "'>");
    $('#guzzlordBattleOutput').html("<img width='205' height='150' src='" + guzzlord.battleImage + "'>");
});

function confirmTeam(){
    var yesNo=confirm("You have chosen "+user.party[0].name+", "+user.party[1].name+", and "+user.party[2].name+". Is this alright?");
    if(yesNo==true){
        $('#teamMessage').fadeOut(500);
        $('#fightTable').show();
        $('#confirmTeam').hide();
        $('#chooseDecidueye').hide();
        $('#chooseIncineroar').hide();
        $('#choosePrimarina').hide();
        $('#chooseCrabominable').hide();
        $('#chooseOranguru').hide();
        $('#chooseVikavolt').hide();
        $('#decidueyeSelectOutput').hide();
        $('#incineroarSelectOutput').hide();
        $('#primarinaSelectOutput').hide();
        $('#crabominableSelectOutput').hide();
        $('#oranguruSelectOutput').hide();
        $('#vikavoltSelectOutput').hide();
        for(i=0; i<user.party.length; i++){
            console.log(user.party[i].currenthp);
        }
        console.log("Current party: "+user.party[0].name+", "+user.party[1].name+", "+user.party[2].name);
    }
    else{
        user.party=[];
    }
}

function ubOne(){
    $('#fightTable').hide();
    $('#nihilegoBattleOutput').show();
}

function ubTwo(){
    $('#fightTable').hide();
    $('#buzzwoleBattleOutput').show();
}

function ubThree(){
    $('#fightTable').hide();
    $('#pheromosaBattleOutput').show();
}

function ubFour(){
    $('#fightTable').hide();
    $('#xurkitreeBattleOutput').show();
}

function ubFive(){
    $('#fightTable').hide();$('#nihilegoBattleOutput').hide();
    $('#kartanaBattleOutput').show();
}

function ubSix(){
    $('#fightTable').hide();
    $('#celesteelaBattleOutput').show();
}

function ubSeven(){
    $('#fightTable').hide();$('#nihilegoBattleOutput').hide();
    $('#guzzlordBattleOutput').show();
}

function backToHub(){
    $('#fightTable').show();
}

$(document).ready(function(){
    $('#openingMessage').hide();
    $('#teamMessage').hide();
    $('#fightTable').hide();
    $('#backToHub').hide();
    $('#chooseDecidueye').hide();
    $('#chooseIncineroar').hide();
    $('#choosePrimarina').hide();
    $('#chooseCrabominable').hide();
    $('#chooseOranguru').hide();
    $('#chooseVikavolt').hide();
    $('#decidueyeSelectOutput').hide();
    $('#incineroarSelectOutput').hide();
    $('#primarinaSelectOutput').hide();
    $('#crabominableSelectOutput').hide();
    $('#oranguruSelectOutput').hide();
    $('#vikavoltSelectOutput').hide();
    $('#decidueyeBattleOutput').hide();
    $('#incineroarBattleOutput').hide();
    $('#primarinaBattleOutput').hide();
    $('#crabominableBattleOutput').hide();
    $('#oranguruBattleOutput').hide();
    $('#vikavoltBattleOutput').hide();
    $('#nihilegoBattleOutput').hide();
    $('#buzzwoleBattleOutput').hide();
    $('#pheromosaBattleOutput').hide();
    $('#xurkitreeBattleOutput').hide();
    $('#kartanaBattleOutput').hide();
    $('#celesteelaBattleOutput').hide();
    $('#guzzlordBattleOutput').hide();
    $('#chooseTeam').hide();
    $('#confirmTeam').hide();
});

function chooseDecidueye(){
    user.addToParty(decidueye);
}

function chooseIncineroar(){
    user.addToParty(incineroar);
}

function choosePrimarina(){
    user.addToParty(primarina);
}

function chooseCrabominable(){
    user.addToParty(crabominable);
}

function chooseOranguru(){
    user.addToParty(oranguru);
}

function chooseVikavolt(){
    user.addToParty(vikavolt);
}