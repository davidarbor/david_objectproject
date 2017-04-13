/**
 * Created by h205p2 on 12/12/16.
 */
function beginAdventure(){
    var nameArea=document.getElementById("nameArea").value;
    user=new Character(nameArea);
    console.log(user);
    $('#nameArea').hide();
    $('.wrapper').hide();
    $('#openingMessage').fadeIn(3000);
    $('#openingMessage').fadeOut(500);
    $('#chooseTeam').show();
}

function chooseTeam(){
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
    $('#openingMessage').hide();
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
    $('#decidueyeIcon').html("<img width='75' height='75' src='" + decidueye.icon + "'>");
    $('#incineroarIcon').html("<img width='75' height='75' src='" + incineroar.icon + "'>");
    $('#primarinaIcon').html("<img width='75' height='75' src='" + primarina.icon + "'>");
    $('#crabominableIcon').html("<img width='75' height='75' src='" + crabominable.icon + "'>");
    $('#oranguruIcon').html("<img width='75' height='75' src='" + oranguru.icon + "'>");
    $('#vikavoltIcon').html("<img width='75' height='75' src='" + vikavolt.icon + "'>");
});

$(document).ready(function(){
    $('#decidueyeBattleOutput').html("<img width='200' height='160' src='" + decidueye.battleImage + "'>");
    $('#incineroarBattleOutput').html("<img width='200' height='200' src='" + incineroar.battleImage + "'>");
    $('#primarinaBattleOutput').html("<img width='200' height='200' src='" + primarina.battleImage + "'>");
    $('#crabominableBattleOutput').html("<img width='200' height='170' src='" + crabominable.battleImage + "'>");
    $('#oranguruBattleOutput').html("<img width='120' height='120' src='" + oranguru.battleImage + "'>");
    $('#vikavoltBattleOutput').html("<img width='150' height='120' src='" + vikavolt.battleImage + "'>");
    $('#nihilegoBattleOutput').html("<img width='120' height='110' src='" + nihilego.battleImage + "'>");
    $('#buzzwoleBattleOutput').html("<img width='240' height='260' src='" + buzzwole.battleImage + "'>");
    $('#pheromosaBattleOutput').html("<img width='150' height='220' src='" + pheromosa.battleImage + "'>");
    $('#xurkitreeBattleOutput').html("<img width='270' height='270' src='" + xurkitree.battleImage + "'>");
    $('#kartanaBattleOutput').html("<img width='150' height='100' src='" + kartana.battleImage + "'>");
    $('#celesteelaBattleOutput').html("<img width='320' height='310' src='" + celesteela.battleImage + "'>");
    $('#guzzlordBattleOutput').html("<img width='350' height='270' src='" + guzzlord.battleImage + "'>");
});

function confirmTeam(){
    var yesNo=confirm("You have chosen "+user.party[0].name+", "+user.party[1].name+", and "+user.party[2].name+". Is this alright?");
    if(yesNo==true){
        $('#teamMessage').fadeOut(500);
        $('#fightTable').show();
        $('#changeFirstPartyMember').show();
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
        setTimeout(showCurrentPartyDiv, 510);
        for(i=0; i<user.party.length; i++){
            console.log(user.party[i].currenthp);
        }
        for(i=0; i<user.party.length; i++){
            if(user.party[i]==decidueye){
                setTimeout(showDeciIcon, 510);
            }
            if(user.party[i]==incineroar){
                setTimeout(showInciIcon, 510);
            }
            if(user.party[i]==primarina){
                setTimeout(showPrimIcon, 510);
            }
            if(user.party[i]==crabominable){
                setTimeout(showCrabIcon, 510);
            }
            if(user.party[i]==oranguru){
                setTimeout(showOranIcon, 510);
            }
            if(user.party[i]==vikavolt){
                setTimeout(showVikaIcon, 510);
            }
        }
        console.log("Current party: "+user.party[0].name+", "+user.party[1].name+", "+user.party[2].name);
    }
    else{
        user.party=[];
    }
}

function showCurrentPartyDiv(){
    $('#currentParty').show();
}

function showDeciIcon(){
    $('#decidueyeIcon').show();
}
function showInciIcon(){
    $('#incineroarIcon').show();
}
function showPrimIcon(){
    $('#primarinaIcon').show();
}
function showCrabIcon(){
    $('#crabominableIcon').show();
}
function showOranIcon(){
    $('#oranguruIcon').show();
}
function showVikaIcon(){
    $('#vikavoltIcon').show();
}

function changeFirstPartyMember(){
    $('#changeFirstPartyMember').hide();
    $('#moveSecond').show();
    $('#moveThird').show();
    $('#confirmSwitchSecond').show();
    $('#confirmSwitchThird').show();
    $('#exitSwitch').show();
}

function swapParty(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function moveSecond(){
    swapParty(user.party, 0, 1);
}

function moveThird(){
    swapParty(user.party, 0, 2);
}

function confirmSwitchSecond(){
    var switchConfirmation=confirm("Your party order is "+user.party[0].name+", "+user.party[1].name+", and "+user.party[2].name+". Is this alright?");
    if(switchConfirmation==true){
        console.log("Current party: "+user.party[0].name+", "+user.party[1].name+", "+user.party[2].name);
        alert("Hit the button again to reverse this switch.");
    }
    else{
        console.log(false);
        alert("You need to hit the button again to reverse this switch.");
    }
}

function confirmSwitchThird(){
    var switchConfirmation=confirm("Your party order is "+user.party[0].name+", "+user.party[1].name+", and "+user.party[2].name+". Is this alright?");
    if(switchConfirmation==true){
        console.log("Current party: "+user.party[0].name+", "+user.party[1].name+", "+user.party[2].name);
        alert("Hit the button again to reverse this switch.");
    }
    else{
        console.log(false);
        alert("You need to hit the button again to reverse this switch.");
    }
}

function exitSwitch(){
    $('#changeFirstPartyMember').hide();
    $('#moveSecond').hide();
    $('#moveThird').hide();
    $('#confirmSwitchSecond').hide();
    $('#confirmSwitchThird').hide();
    $('#exitSwitch').hide();
}

function ubOne(){
    currentUB=nihilego;
    $('#fightTable').hide();
    $('#changeFirstPartyMember').hide();
    setTimeout(showMoveButtons, 4500);
    setTimeout(showNihilego, 500);
    $('#nihiStartBattle').html("Nihilego appeared!");
    setTimeout(showNiBM, 500);
    setTimeout(hideNiBM, 1500);
    if(user.party[0]==decidueye){
        activeMon=decidueye;
        setTimeout(showDecidueye, 2500);
        $('#deciStartBattle').html("Go! Decidueye!");
        setTimeout(showDeBM, 2500);
        setTimeout(hideDeBM, 3500);
    }
    if(user.party[0]==incineroar){
        activeMon=incineroar;
        setTimeout(showIncineroar, 2500);
        $('#inciStartBattle').html("Go! Incineroar!");
        setTimeout(showInBM, 2500);
        setTimeout(hideInBM, 3500);
    }
    if(user.party[0]==primarina){
        activeMon=primarina;
        setTimeout(showPrimarina, 2500);
        $('#primStartBattle').html("Go! Primarina!");
        setTimeout(showPrBM, 2500);
        setTimeout(hidePrBM, 3500);
    }
    if(user.party[0]==crabominable){
        activeMon=crabominable;
        setTimeout(showCrabominable, 2500);
        $('#crabStartBattle').html("Go! Crabominable!");
        setTimeout(showCrBM, 2500);
        setTimeout(hideCrBM, 3500);
    }
    if(user.party[0]==oranguru){
        activeMon=oranguru;
        setTimeout(showOranguru, 2500);
        $('#oranStartBattle').html("Go! Oranguru!");
        setTimeout(showOrBM, 2500);
        setTimeout(hideOrBM, 3500);
    }
    if(user.party[0]==vikavolt){
        activeMon=vikavolt;
        setTimeout(showVikavolt, 2500);
        $('#vikaStartBattle').html("Go! Vikavolt!");
        setTimeout(showViBM, 2500);
        setTimeout(hideViBM, 3500);
    }
    document.getElementById('moveButtonOne').textContent=activeMon.moves[0].name;
    document.getElementById('moveButtonTwo').textContent=activeMon.moves[1].name;
    document.getElementById('moveButtonThree').textContent=activeMon.moves[2].name;
    document.getElementById('moveButtonFour').textContent=activeMon.moves[3].name;
}

function ubTwo(){
    currentUB=buzzwole;
    $('#fightTable').hide();
    $('#changeFirstPartyMember').hide();
    setTimeout(showBuzzwole, 500);
    setTimeout(showMoveButtons, 4500);
    $('#buzzStartBattle').html("Buzzwole appeared!");
    setTimeout(showBuBM, 500);
    setTimeout(hideBuBM, 1500);
    if(user.party[0]==decidueye){
        activeMon=decidueye;
        setTimeout(showDecidueye, 2500);
        $('#deciStartBattle').html("Go! Decidueye!");
        setTimeout(showDeBM, 2500);
        setTimeout(hideDeBM, 3500);
    }
    if(user.party[0]==incineroar){
        activeMon=incineroar;
        setTimeout(showIncineroar, 2500);
        $('#inciStartBattle').html("Go! Incineroar!");
        setTimeout(showInBM, 2500);
        setTimeout(hideInBM, 3500);
    }
    if(user.party[0]==primarina){
        activeMon=primarina;
        setTimeout(showPrimarina, 2500);
        $('#primStartBattle').html("Go! Primarina!");
        setTimeout(showPrBM, 2500);
        setTimeout(hidePrBM, 3500);
    }
    if(user.party[0]==crabominable){
        activeMon=crabominable;
        setTimeout(showCrabominable, 2500);
        $('#crabStartBattle').html("Go! Crabominable!");
        setTimeout(showCrBM, 2500);
        setTimeout(hideCrBM, 3500);
    }
    if(user.party[0]==oranguru){
        activeMon=oranguru;
        setTimeout(showOranguru, 2500);
        $('#oranStartBattle').html("Go! Oranguru!");
        setTimeout(showOrBM, 2500);
        setTimeout(hideOrBM, 3500);
    }
    if(user.party[0]==vikavolt){
        activeMon=vikavolt;
        setTimeout(showVikavolt, 2500);
        $('#vikaStartBattle').html("Go! Vikavolt!");
        setTimeout(showViBM, 2500);
        setTimeout(hideViBM, 3500);
    }
    document.getElementById('moveButtonOne').textContent=activeMon.moves[0].name;
    document.getElementById('moveButtonTwo').textContent=activeMon.moves[1].name;
    document.getElementById('moveButtonThree').textContent=activeMon.moves[2].name;
    document.getElementById('moveButtonFour').textContent=activeMon.moves[3].name;
}

function ubThree(){
    currentUB=pheromosa;
    $('#fightTable').hide();
    $('#changeFirstPartyMember').hide();
    setTimeout(showMoveButtons, 4500);
    setTimeout(showPheromosa, 500);
    $('#pherStartBattle').html("Pheromosa appeared!");
    setTimeout(showPhBM, 500);
    setTimeout(hidePhBM, 1500);
    if(user.party[0]==decidueye){
        activeMon=decidueye;
        setTimeout(showDecidueye, 2500);
        $('#deciStartBattle').html("Go! Decidueye!");
        setTimeout(showDeBM, 2500);
        setTimeout(hideDeBM, 3500);
    }
    if(user.party[0]==incineroar){
        activeMon=incineroar;
        setTimeout(showIncineroar, 2500);
        $('#inciStartBattle').html("Go! Incineroar!");
        setTimeout(showInBM, 2500);
        setTimeout(hideInBM, 3500);
    }
    if(user.party[0]==primarina){
        activeMon=primarina;
        setTimeout(showPrimarina, 2500);
        $('#primStartBattle').html("Go! Primarina!");
        setTimeout(showPrBM, 2500);
        setTimeout(hidePrBM, 3500);
    }
    if(user.party[0]==crabominable){
        activeMon=crabominable;
        setTimeout(showCrabominable, 2500);
        $('#crabStartBattle').html("Go! Crabominable!");
        setTimeout(showCrBM, 2500);
        setTimeout(hideCrBM, 3500);
    }
    if(user.party[0]==oranguru){
        activeMon=oranguru;
        setTimeout(showOranguru, 2500);
        $('#oranStartBattle').html("Go! Oranguru!");
        setTimeout(showOrBM, 2500);
        setTimeout(hideOrBM, 3500);
    }
    if(user.party[0]==vikavolt){
        activeMon=vikavolt;
        setTimeout(showVikavolt, 2500);
        $('#vikaStartBattle').html("Go! Vikavolt!");
        setTimeout(showViBM, 2500);
        setTimeout(hideViBM, 3500);
    }
    document.getElementById('moveButtonOne').textContent=activeMon.moves[0].name;
    document.getElementById('moveButtonTwo').textContent=activeMon.moves[1].name;
    document.getElementById('moveButtonThree').textContent=activeMon.moves[2].name;
    document.getElementById('moveButtonFour').textContent=activeMon.moves[3].name;
}

function ubFour(){
    currentUB=xurkitree;
    $('#fightTable').hide();
    $('#changeFirstPartyMember').hide();
    setTimeout(showMoveButtons, 4500);
    setTimeout(showXurkitree, 500);
    $('#xurkStartBattle').html("Xurkitree appeared!");
    setTimeout(showXuBM, 500);
    setTimeout(hideXuBM, 1500);
    if(user.party[0]==decidueye){
        activeMon=decidueye;
        setTimeout(showDecidueye, 2500);
        $('#deciStartBattle').html("Go! Decidueye!");
        setTimeout(showDeBM, 2500);
        setTimeout(hideDeBM, 3500);
    }
    if(user.party[0]==incineroar){
        activeMon=incineroar;
        setTimeout(showIncineroar, 2500);
        $('#inciStartBattle').html("Go! Incineroar!");
        setTimeout(showInBM, 2500);
        setTimeout(hideInBM, 3500);
    }
    if(user.party[0]==primarina){
        activeMon=primarina;
        setTimeout(showPrimarina, 2500);
        $('#primStartBattle').html("Go! Primarina!");
        setTimeout(showPrBM, 2500);
        setTimeout(hidePrBM, 3500);
    }
    if(user.party[0]==crabominable){
        activeMon=crabominable;
        setTimeout(showCrabominable, 2500);
        $('#crabStartBattle').html("Go! Crabominable!");
        setTimeout(showCrBM, 2500);
        setTimeout(hideCrBM, 3500);
    }
    if(user.party[0]==oranguru){
        activeMon=oranguru;
        setTimeout(showOranguru, 2500);
        $('#oranStartBattle').html("Go! Oranguru!");
        setTimeout(showOrBM, 2500);
        setTimeout(hideOrBM, 3500);
    }
    if(user.party[0]==vikavolt){
        activeMon=vikavolt;
        setTimeout(showVikavolt, 2500);
        $('#vikaStartBattle').html("Go! Vikavolt!");
        setTimeout(showViBM, 2500);
        setTimeout(hideViBM, 3500);
    }
    document.getElementById('moveButtonOne').textContent=activeMon.moves[0].name;
    document.getElementById('moveButtonTwo').textContent=activeMon.moves[1].name;
    document.getElementById('moveButtonThree').textContent=activeMon.moves[2].name;
    document.getElementById('moveButtonFour').textContent=activeMon.moves[3].name;
}

function ubFive(){
    currentUB=kartana;
    $('#fightTable').hide();
    $('#changeFirstPartyMember').hide();
    setTimeout(showMoveButtons, 4500);
    setTimeout(showKartana, 500);
    $('#kartStartBattle').html("Kartana appeared!");
    setTimeout(showKaBM, 500);
    setTimeout(hideKaBM, 1500);
    if(user.party[0]==decidueye){
        activeMon=decidueye;
        setTimeout(showDecidueye, 2500);
        $('#deciStartBattle').html("Go! Decidueye!");
        setTimeout(showDeBM, 2500);
        setTimeout(hideDeBM, 3500);
    }
    if(user.party[0]==incineroar){
        activeMon=incineroar;
        setTimeout(showIncineroar, 2500);
        $('#inciStartBattle').html("Go! Incineroar!");
        setTimeout(showInBM, 2500);
        setTimeout(hideInBM, 3500);
    }
    if(user.party[0]==primarina){
        activeMon=primarina;
        setTimeout(showPrimarina, 2500);
        $('#primStartBattle').html("Go! Primarina!");
        setTimeout(showPrBM, 2500);
        setTimeout(hidePrBM, 3500);
    }
    if(user.party[0]==crabominable){
        activeMon=crabominable;
        setTimeout(showCrabominable, 2500);
        $('#crabStartBattle').html("Go! Crabominable!");
        setTimeout(showCrBM, 2500);
        setTimeout(hideCrBM, 3500);
    }
    if(user.party[0]==oranguru){
        activeMon=oranguru;
        setTimeout(showOranguru, 2500);
        $('#oranStartBattle').html("Go! Oranguru!");
        setTimeout(showOrBM, 2500);
        setTimeout(hideOrBM, 3500);
    }
    if(user.party[0]==vikavolt){
        activeMon=vikavolt;
        setTimeout(showVikavolt, 2500);
        $('#vikaStartBattle').html("Go! Vikavolt!");
        setTimeout(showViBM, 2500);
        setTimeout(hideViBM, 3500);
    }
    document.getElementById('moveButtonOne').textContent=activeMon.moves[0].name;
    document.getElementById('moveButtonTwo').textContent=activeMon.moves[1].name;
    document.getElementById('moveButtonThree').textContent=activeMon.moves[2].name;
    document.getElementById('moveButtonFour').textContent=activeMon.moves[3].name;
}

function ubSix(){
    currentUB=celesteela;
    $('#fightTable').hide();
    $('#changeFirstPartyMember').hide();
    setTimeout(showMoveButtons, 4500);
    setTimeout(showCelesteela, 500);
    $('#celeStartBattle').html("Celesteela appeared!");
    setTimeout(showCeBM, 500);
    setTimeout(hideCeBM, 1500);
    if(user.party[0]==decidueye){
        activeMon=decidueye;
        setTimeout(showDecidueye, 2500);
        $('#deciStartBattle').html("Go! Decidueye!");
        setTimeout(showDeBM, 2500);
        setTimeout(hideDeBM, 3500);
    }
    if(user.party[0]==incineroar){
        activeMon=incineroar;
        setTimeout(showIncineroar, 2500);
        $('#inciStartBattle').html("Go! Incineroar!");
        setTimeout(showInBM, 2500);
        setTimeout(hideInBM, 3500);
    }
    if(user.party[0]==primarina){
        activeMon=primarina;
        setTimeout(showPrimarina, 2500);
        $('#primStartBattle').html("Go! Primarina!");
        setTimeout(showPrBM, 2500);
        setTimeout(hidePrBM, 3500);
    }
    if(user.party[0]==crabominable){
        activeMon=crabominable;
        setTimeout(showCrabominable, 2500);
        $('#crabStartBattle').html("Go! Crabominable!");
        setTimeout(showCrBM, 2500);
        setTimeout(hideCrBM, 3500);
    }
    if(user.party[0]==oranguru){
        activeMon=oranguru;
        setTimeout(showOranguru, 2500);
        $('#oranStartBattle').html("Go! Oranguru!");
        setTimeout(showOrBM, 2500);
        setTimeout(hideOrBM, 3500);
    }
    if(user.party[0]==vikavolt){
        activeMon=vikavolt;
        setTimeout(showVikavolt, 2500);
        $('#vikaStartBattle').html("Go! Vikavolt!");
        setTimeout(showViBM, 2500);
        setTimeout(hideViBM, 3500);
    }
    document.getElementById('moveButtonOne').textContent=activeMon.moves[0].name;
    document.getElementById('moveButtonTwo').textContent=activeMon.moves[1].name;
    document.getElementById('moveButtonThree').textContent=activeMon.moves[2].name;
    document.getElementById('moveButtonFour').textContent=activeMon.moves[3].name;
}

function ubSeven(){
    currentUB=guzzlord;
    $('#fightTable').hide();
    $('#changeFirstPartyMember').hide();
    setTimeout(showMoveButtons, 4500);
    setTimeout(showGuzzlord, 500);
    $('#guzzStartBattle').html("Guzzlord appeared!");
    setTimeout(showGuBM, 500);
    setTimeout(hideGuBM, 1500);
    if(user.party[0]==decidueye){
        activeMon=decidueye;
        setTimeout(showDecidueye, 2500);
        $('#deciStartBattle').html("Go! Decidueye!");
        setTimeout(showDeBM, 2500);
        setTimeout(hideDeBM, 3500);
    }
    if(user.party[0]==incineroar){
        activeMon=incineroar;
        setTimeout(showIncineroar, 2500);
        $('#inciStartBattle').html("Go! Incineroar!");
        setTimeout(showInBM, 2500);
        setTimeout(hideInBM, 3500);
    }
    if(user.party[0]==primarina){
        activeMon=primarina;
        setTimeout(showPrimarina, 2500);
        $('#primStartBattle').html("Go! Primarina!");
        setTimeout(showPrBM, 2500);
        setTimeout(hidePrBM, 3500);
    }
    if(user.party[0]==crabominable){
        activeMon=crabominable;
        setTimeout(showCrabominable, 2500);
        $('#crabStartBattle').html("Go! Crabominable!");
        setTimeout(showCrBM, 2500);
        setTimeout(hideCrBM, 3500);
    }
    if(user.party[0]==oranguru){
        activeMon=oranguru;
        setTimeout(showOranguru, 2500);
        $('#oranStartBattle').html("Go! Oranguru!");
        setTimeout(showOrBM, 2500);
        setTimeout(hideOrBM, 3500);
    }
    if(user.party[0]==vikavolt){
        activeMon=vikavolt;
        setTimeout(showVikavolt, 2500);
        $('#vikaStartBattle').html("Go! Vikavolt!");
        setTimeout(showViBM, 2500);
        setTimeout(hideViBM, 3500);
    }
    document.getElementById('moveButtonOne').textContent=activeMon.moves[0].name;
    document.getElementById('moveButtonTwo').textContent=activeMon.moves[1].name;
    document.getElementById('moveButtonThree').textContent=activeMon.moves[2].name;
    document.getElementById('moveButtonFour').textContent=activeMon.moves[3].name;
}

function useMoveOne(){
    console.log(activeMon.name+" used "+activeMon.moves[0].name+"!");

    var stringOne=activeMon.moves[0].type;
    for(i=0; i<currentUB.weaknesses.length; i++){
        if(currentUB.weaknesses[i]==stringOne && activeMon.moves[0].basePower!=0){
            console.log("It's super-effective!");
        }
    }
    for(i=0; i<currentUB.resistances.length; i++){
        if(currentUB.resistances[i]==stringOne && activeMon.moves[0].basePower!=0){
            console.log("It's not very effective...");
        }
    }
    for(i=0; i<currentUB.immunities.length; i++){
        if(currentUB.immunities[i]==stringOne && activeMon.moves[0].basePower!=0){
            console.log("It doesn't affect "+currentUB.name+"...");
        }
    }
    if(activeMon.moves[0]==swordsDance){
        console.log(activeMon.name+"'s Attack rose sharply!");
    }
    if(activeMon.moves[0]==workUp){
        console.log(activeMon.name+"'s Attack rose!");
        console.log(activeMon.name+"'s Special Attack rose!");
    }
    if(activeMon.moves[0]==powerUpPunch){
        console.log(activeMon.name+"'s Attack rose!");
    }
    if(activeMon.moves[0]==nastyPlot){
        console.log(activeMon.name+"'s Special Attack rose sharply!");
    }
    if(activeMon.moves[0]==agility){
        console.log(activeMon.name+"'s Speed rose sharply!");
    }
}
function useMoveTwo(){
    console.log(activeMon.name+" used "+activeMon.moves[1].name+"!");
    var stringTwo=activeMon.moves[1].type;
    for(i=0; i<currentUB.weaknesses.length; i++){
        if(currentUB.weaknesses[i]==stringTwo && activeMon.moves[1].basePower!=0){
            console.log("It's super-effective!");
        }
    }
    for(i=0; i<currentUB.resistances.length; i++){
        if(currentUB.resistances[i]==stringTwo && activeMon.moves[1].basePower!=0){
            console.log("It's not very effective...");
        }
    }
    for(i=0; i<currentUB.immunities.length; i++){
        if(currentUB.immunities[i]==stringTwo && activeMon.moves[1].basePower!=0){
            console.log("It doesn't affect "+currentUB.name+"...");
        }
    }
    if(activeMon.moves[1]==spiritShackle){

    }
    if(activeMon.moves[1]==flareBlitz){

    }
    if(activeMon.moves[1]==scald){
        if(scaldArray[scaldIdx]=="burn"){
            console.log(currentUB.name+"was burned!");
        }
    }
    if(activeMon.moves[1]==iceHammer){
        console.log(activeMon.name+"'s Speed fell!");
    }
    if(activeMon.moves[1]==psychic){

    }
    if(activeMon.moves[1]==thunderbolt){

    }
}
function useMoveThree(){
    console.log(activeMon.name+" used "+activeMon.moves[2].name+"!");
    var stringThree=activeMon.moves[2].type;
    for(i=0; i<currentUB.weaknesses.length; i++){
        if(currentUB.weaknesses[i]==stringThree && activeMon.moves[2].basePower!=0){
            console.log("It's super-effective!");
        }
    }for(i=0; i<currentUB.resistances.length; i++){
        if(currentUB.resistances[i]==stringThree && activeMon.moves[2].basePower!=0){
            console.log("It's not very effective...");
        }
    }
    for(i=0; i<currentUB.immunities.length; i++){
        if(currentUB.immunities[i]==stringThree && activeMon.moves[2].basePower!=0){
            console.log("It doesn't affect "+currentUB.name+"...");
        }
    }
    if(activeMon.moves[2]==leafBlade){

    }
    if(activeMon.moves[2]==darkestLariat){

    }
    if(activeMon.moves[2]==moonblast){

    }
    if(activeMon.moves[2]==closeCombat){
        console.log(activeMon.name+"'s Defense fell!");
        console.log(activeMon.name+"'s Special Defense fell!");
    }
    if(activeMon.moves[2]==focusBlast){

    }
    if(activeMon.moves[2]==bugBuzz){

    }
}
function useMoveFour(){
    console.log(activeMon.name+" used "+activeMon.moves[3].name+"!");
    var stringFour=activeMon.moves[3].type;
    for(i=0; i<currentUB.weaknesses.length; i++){
        if(currentUB.weaknesses[i]==stringFour && activeMon.moves[3].basePower!=0){
            console.log("It's super-effective!");
        }
    }
    for(i=0; i<currentUB.resistances.length; i++){
        if(currentUB.resistances[i]==stringFour && activeMon.moves[3].basePower!=0){
            console.log("It's not very effective...");
        }
    }
    for(i=0; i<currentUB.immunities.length; i++){
        if(currentUB.immunities[i]==stringFour && activeMon.moves[3].basePower!=0){
            console.log("It doesn't affect "+currentUB.name+"...");
        }
    }
    if(activeMon.moves[3]==suckerPunch){

    }
    if(activeMon.moves[3]==earthquake){

    }
    if(activeMon.moves[3]==psychic){

    }
    if(activeMon.moves[3]==thunderbolt){

    }
    if(activeMon.moves[3]==hiddenPowerFire){

    }
}

function showMoveButtons(){
    $('#moveButtonOne').show();
    $('#moveButtonTwo').show();
    $('#moveButtonThree').show();
    $('#moveButtonFour').show();
}
function hideMoveButtons(){
    $('#moveButtonOne').hide();
    $('#moveButtonTwo').hide();
    $('#moveButtonThree').hide();
    $('#moveButtonFour').hide();
}

function backToHub(){
    $('#fightTable').show();
    $('#backToHub').hide();
    $('#changeFirstPartyMember').show();
}

function showDecidueye(){
    $('#decidueyeBattleOutput').show();
}

function showIncineroar(){
    $('#incineroarBattleOutput').show();
}

function showPrimarina(){
    $('#primarinaBattleOutput').show();
}

function showCrabominable(){
    $('#crabominableBattleOutput').show();
}

function showOranguru(){
    $('#oranguruBattleOutput').show();
}

function showVikavolt(){
    $('#vikavoltBattleOutput').show();
}

function showNihilego(){
    $('#nihilegoBattleOutput').show();
}

function showBuzzwole(){
    $('#buzzwoleBattleOutput').show();
}

function showPheromosa(){
    $('#pheromosaBattleOutput').show();
}

function showXurkitree(){
    $('#xurkitreeBattleOutput').show();
}

function showKartana(){
    $('#kartanaBattleOutput').show();
}

function showCelesteela(){
    $('#celesteelaBattleOutput').show();
}

function showGuzzlord(){
    $('#guzzlordBattleOutput').show();
}

function showDeBM(){
    $('#deciStartBattle').show();
}

function showInBM(){
    $('#inciStartBattle').show();
}

function showPrBM(){
    $('#primStartBattle').show();
}

function showCrBM(){
    $('#crabStartBattle').show();
}

function showOrBM(){
    $('#oranStartBattle').show();
}

function showViBM(){
    $('#vikaStartBattle').show();
}

function showNiBM(){
    $('#nihiStartBattle').show();
}

function showBuBM(){
    $('#buzzStartBattle').show();
}

function showPhBM(){
    $('#pherStartBattle').show();
}

function showXuBM(){
    $('#xurkStartBattle').show();
}

function showKaBM(){
    $('#kartStartBattle').show();
}

function showCeBM(){
    $('#celeStartBattle').show();
}

function showGuBM(){
    $('#guzzStartBattle').show();
}

function hideDeBM(){
    $('#deciStartBattle').hide();
}

function hideInBM(){
    $('#inciStartBattle').hide();
}

function hidePrBM(){
    $('#primStartBattle').hide();
}

function hideCrBM(){
    $('#crabStartBattle').hide();
}

function hideOrBM(){
    $('#oranStartBattle').hide();
}

function hideViBM(){
    $('#vikaStartBattle').hide();
}

function hideNiBM(){
    $('#nihiStartBattle').hide();
}

function hideBuBM(){
    $('#buzzStartBattle').hide();
}

function hidePhBM(){
    $('#pherStartBattle').hide();
}

function hideXuBM(){
    $('#xurkStartBattle').hide();
}

function hideKaBM(){
    $('#kartStartBattle').hide();
}

function hideCeBM(){
    $('#celeStartBattle').hide();
}

function hideGuBM(){
    $('#guzzStartBattle').hide();
}

$(document).ready(function(){
    $('#openingMessage').hide();
    $('#teamMessage').hide();
    $('#fightTable').hide();
    $('#backToHub').hide();
    $('#currentParty').hide();

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

    $('#decidueyeIcon').hide();
    $('#incineroarIcon').hide();
    $('#primarinaIcon').hide();
    $('#crabominableIcon').hide();
    $('#oranguruIcon').hide();
    $('#vikavoltIcon').hide();

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

    $('#deciStartBattle').hide();
    $('#inciStartBattle').hide();
    $('#primStartBattle').hide();
    $('#crabStartBattle').hide();
    $('#oranStartBattle').hide();
    $('#vikaStartBattle').hide();
    $('#nihiStartBattle').hide();
    $('#buzzStartBattle').hide();
    $('#pherStartBattle').hide();
    $('#xurkStartBattle').hide();
    $('#kartStartBattle').hide();
    $('#celeStartBattle').hide();
    $('#guzzStartBattle').hide();

    $('#chooseTeam').hide();
    $('#confirmTeam').hide();

    $('#changeFirstPartyMember').hide();
    $('#moveSecond').hide();
    $('#moveThird').hide();
    $('#confirmSwitchSecond').hide();
    $('#confirmSwitchThird').hide();
    $('#exitSwitch').hide();

    $('#moveButtonOne').hide();
    $('#moveButtonTwo').hide();
    $('#moveButtonThree').hide();
    $('#moveButtonFour').hide();
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

function chooseVikavolt() {
    user.addToParty(vikavolt);
}
