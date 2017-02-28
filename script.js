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
        for(i=0; i<user.party.length; i++){
            console.log(user.party[i].currenthp);
        }
        console.log("Current party: "+user.party[0].name+", "+user.party[1].name+", "+user.party[2].name);
    }
    else{
        user.party=[];
    }
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
    $('#fightTable').hide();
    $('#changeFirstPartyMember').hide();
    setTimeout(showMoveButtons, 3500);
    setTimeout(showNihilego, 500);
    if(user.party[0]==decidueye){
        setTimeout(showDecidueye, 2500);
        document.getElementById('moveButtonOne').textContent="Swords Dance";
        document.getElementById('moveButtonTwo').textContent="Spirit Shackle";
        document.getElementById('moveButtonThree').textContent="Leaf Blade";
        document.getElementById('moveButtonFour').textContent="Sucker Punch";
    }
    if(user.party[0]==incineroar){
        setTimeout(showIncineroar, 2500);
        document.getElementById('moveButtonOne').textContent="Swords Dance";
        document.getElementById('moveButtonTwo').textContent="Flare Blitz";
        document.getElementById('moveButtonThree').textContent="Darkest Lariat";
        document.getElementById('moveButtonFour').textContent="Earthquake";
    }
    if(user.party[0]==primarina){
        setTimeout(showPrimarina, 2500);
        document.getElementById('moveButtonOne').textContent="Work Up";
        document.getElementById('moveButtonTwo').textContent="Scald";
        document.getElementById('moveButtonThree').textContent="Moonblast";
        document.getElementById('moveButtonFour').textContent="Psychic";
    }
    if(user.party[0]==crabominable){
        setTimeout(showCrabominable, 2500);
        document.getElementById('moveButtonOne').textContent="Power-Up Punch";
        document.getElementById('moveButtonTwo').textContent="Ice Hammer";
        document.getElementById('moveButtonThree').textContent="Close Combat";
        document.getElementById('moveButtonFour').textContent="Earthquake";
    }
    if(user.party[0]==oranguru){
        setTimeout(showOranguru, 2500);
        document.getElementById('moveButtonOne').textContent="Nasty Plot";
        document.getElementById('moveButtonTwo').textContent="Psychic";
        document.getElementById('moveButtonThree').textContent="Focus Blast";
        document.getElementById('moveButtonFour').textContent="Thunderbolt";
    }
    if(user.party[0]==vikavolt){
        setTimeout(showVikavolt, 2500);
        document.getElementById('moveButtonOne').textContent="Agility";
        document.getElementById('moveButtonTwo').textContent="Thunderbolt";
        document.getElementById('moveButtonThree').textContent="Bug Buzz";
        document.getElementById('moveButtonFour').textContent="Hidden Power Fire";
    }
}

function ubTwo(){
    $('#fightTable').hide();
    $('#changeFirstPartyMember').hide();
    setTimeout(showMoveButtons, 3500);
    setTimeout(showBuzzwole, 500);
    if(user.party[0]==decidueye){
        setTimeout(showDecidueye, 2500);
        document.getElementById('moveButtonOne').textContent="Swords Dance";
        document.getElementById('moveButtonTwo').textContent="Spirit Shackle";
        document.getElementById('moveButtonThree').textContent="Leaf Blade";
        document.getElementById('moveButtonFour').textContent="Sucker Punch";
    }
    if(user.party[0]==incineroar){
        setTimeout(showIncineroar, 2500);
        document.getElementById('moveButtonOne').textContent="Swords Dance";
        document.getElementById('moveButtonTwo').textContent="Flare Blitz";
        document.getElementById('moveButtonThree').textContent="Darkest Lariat";
        document.getElementById('moveButtonFour').textContent="Earthquake";
    }
    if(user.party[0]==primarina){
        setTimeout(showPrimarina, 2500);
        document.getElementById('moveButtonOne').textContent="Work Up";
        document.getElementById('moveButtonTwo').textContent="Scald";
        document.getElementById('moveButtonThree').textContent="Moonblast";
        document.getElementById('moveButtonFour').textContent="Psychic";
    }
    if(user.party[0]==crabominable){
        setTimeout(showCrabominable, 2500);
        document.getElementById('moveButtonOne').textContent="Power-Up Punch";
        document.getElementById('moveButtonTwo').textContent="Ice Hammer";
        document.getElementById('moveButtonThree').textContent="Close Combat";
        document.getElementById('moveButtonFour').textContent="Earthquake";
    }
    if(user.party[0]==oranguru){
        setTimeout(showOranguru, 2500);
        document.getElementById('moveButtonOne').textContent="Nasty Plot";
        document.getElementById('moveButtonTwo').textContent="Psychic";
        document.getElementById('moveButtonThree').textContent="Focus Blast";
        document.getElementById('moveButtonFour').textContent="Thunderbolt";
    }
    if(user.party[0]==vikavolt){
        setTimeout(showVikavolt, 2500);
        document.getElementById('moveButtonOne').textContent="Agility";
        document.getElementById('moveButtonTwo').textContent="Thunderbolt";
        document.getElementById('moveButtonThree').textContent="Bug Buzz";
        document.getElementById('moveButtonFour').textContent="Hidden Power Fire";
    }
}

function ubThree(){
    $('#fightTable').hide();
    $('#changeFirstPartyMember').hide();
    setTimeout(showMoveButtons, 3500);
    setTimeout(showPheromosa, 500);
    if(user.party[0]==decidueye){
        setTimeout(showDecidueye, 2500);
        document.getElementById('moveButtonOne').textContent="Swords Dance";
        document.getElementById('moveButtonTwo').textContent="Spirit Shackle";
        document.getElementById('moveButtonThree').textContent="Leaf Blade";
        document.getElementById('moveButtonFour').textContent="Sucker Punch";
    }
    if(user.party[0]==incineroar){
        setTimeout(showIncineroar, 2500);
        document.getElementById('moveButtonOne').textContent="Swords Dance";
        document.getElementById('moveButtonTwo').textContent="Flare Blitz";
        document.getElementById('moveButtonThree').textContent="Darkest Lariat";
        document.getElementById('moveButtonFour').textContent="Earthquake";
    }
    if(user.party[0]==primarina){
        setTimeout(showPrimarina, 2500);
        document.getElementById('moveButtonOne').textContent="Work Up";
        document.getElementById('moveButtonTwo').textContent="Scald";
        document.getElementById('moveButtonThree').textContent="Moonblast";
        document.getElementById('moveButtonFour').textContent="Psychic";
    }
    if(user.party[0]==crabominable){
        setTimeout(showCrabominable, 2500);
        document.getElementById('moveButtonOne').textContent="Power-Up Punch";
        document.getElementById('moveButtonTwo').textContent="Ice Hammer";
        document.getElementById('moveButtonThree').textContent="Close Combat";
        document.getElementById('moveButtonFour').textContent="Earthquake";
    }
    if(user.party[0]==oranguru){
        setTimeout(showOranguru, 2500);
        document.getElementById('moveButtonOne').textContent="Nasty Plot";
        document.getElementById('moveButtonTwo').textContent="Psychic";
        document.getElementById('moveButtonThree').textContent="Focus Blast";
        document.getElementById('moveButtonFour').textContent="Thunderbolt";
    }
    if(user.party[0]==vikavolt){
        setTimeout(showVikavolt, 2500);
        document.getElementById('moveButtonOne').textContent="Agility";
        document.getElementById('moveButtonTwo').textContent="Thunderbolt";
        document.getElementById('moveButtonThree').textContent="Bug Buzz";
        document.getElementById('moveButtonFour').textContent="Hidden Power Fire";
    }
}

function ubFour(){
    $('#fightTable').hide();
    $('#changeFirstPartyMember').hide();
    setTimeout(showMoveButtons, 3500);
    setTimeout(showXurkitree, 500);
    if(user.party[0]==decidueye){
        setTimeout(showDecidueye, 2500);
        document.getElementById('moveButtonOne').textContent="Swords Dance";
        document.getElementById('moveButtonTwo').textContent="Spirit Shackle";
        document.getElementById('moveButtonThree').textContent="Leaf Blade";
        document.getElementById('moveButtonFour').textContent="Sucker Punch";
    }
    if(user.party[0]==incineroar){
        setTimeout(showIncineroar, 2500);
        document.getElementById('moveButtonOne').textContent="Swords Dance";
        document.getElementById('moveButtonTwo').textContent="Flare Blitz";
        document.getElementById('moveButtonThree').textContent="Darkest Lariat";
        document.getElementById('moveButtonFour').textContent="Earthquake";
    }
    if(user.party[0]==primarina){
        setTimeout(showPrimarina, 2500);
        document.getElementById('moveButtonOne').textContent="Work Up";
        document.getElementById('moveButtonTwo').textContent="Scald";
        document.getElementById('moveButtonThree').textContent="Moonblast";
        document.getElementById('moveButtonFour').textContent="Psychic";
    }
    if(user.party[0]==crabominable){
        setTimeout(showCrabominable, 2500);
        document.getElementById('moveButtonOne').textContent="Power-Up Punch";
        document.getElementById('moveButtonTwo').textContent="Ice Hammer";
        document.getElementById('moveButtonThree').textContent="Close Combat";
        document.getElementById('moveButtonFour').textContent="Earthquake";
    }
    if(user.party[0]==oranguru){
        setTimeout(showOranguru, 2500);
        document.getElementById('moveButtonOne').textContent="Nasty Plot";
        document.getElementById('moveButtonTwo').textContent="Psychic";
        document.getElementById('moveButtonThree').textContent="Focus Blast";
        document.getElementById('moveButtonFour').textContent="Thunderbolt";
    }
    if(user.party[0]==vikavolt){
        setTimeout(showVikavolt, 2500);
        document.getElementById('moveButtonOne').textContent="Agility";
        document.getElementById('moveButtonTwo').textContent="Thunderbolt";
        document.getElementById('moveButtonThree').textContent="Bug Buzz";
        document.getElementById('moveButtonFour').textContent="Hidden Power Fire";
    }
}

function ubFive(){
    $('#fightTable').hide();
    $('#changeFirstPartyMember').hide();
    setTimeout(showMoveButtons, 3500);
    setTimeout(showKartana, 500);
    if(user.party[0]==decidueye){
        setTimeout(showDecidueye, 2500);
        document.getElementById('moveButtonOne').textContent="Swords Dance";
        document.getElementById('moveButtonTwo').textContent="Spirit Shackle";
        document.getElementById('moveButtonThree').textContent="Leaf Blade";
        document.getElementById('moveButtonFour').textContent="Sucker Punch";
    }
    if(user.party[0]==incineroar){
        setTimeout(showIncineroar, 2500);
        document.getElementById('moveButtonOne').textContent="Swords Dance";
        document.getElementById('moveButtonTwo').textContent="Flare Blitz";
        document.getElementById('moveButtonThree').textContent="Darkest Lariat";
        document.getElementById('moveButtonFour').textContent="Earthquake";
    }
    if(user.party[0]==primarina){
        setTimeout(showPrimarina, 2500);
        document.getElementById('moveButtonOne').textContent="Work Up";
        document.getElementById('moveButtonTwo').textContent="Scald";
        document.getElementById('moveButtonThree').textContent="Moonblast";
        document.getElementById('moveButtonFour').textContent="Psychic";
    }
    if(user.party[0]==crabominable){
        setTimeout(showCrabominable, 2500);
        document.getElementById('moveButtonOne').textContent="Power-Up Punch";
        document.getElementById('moveButtonTwo').textContent="Ice Hammer";
        document.getElementById('moveButtonThree').textContent="Close Combat";
        document.getElementById('moveButtonFour').textContent="Earthquake";
    }
    if(user.party[0]==oranguru){
        setTimeout(showOranguru, 2500);
        document.getElementById('moveButtonOne').textContent="Nasty Plot";
        document.getElementById('moveButtonTwo').textContent="Psychic";
        document.getElementById('moveButtonThree').textContent="Focus Blast";
        document.getElementById('moveButtonFour').textContent="Thunderbolt";
    }
    if(user.party[0]==vikavolt){
        setTimeout(showVikavolt, 2500);
        document.getElementById('moveButtonOne').textContent="Agility";
        document.getElementById('moveButtonTwo').textContent="Thunderbolt";
        document.getElementById('moveButtonThree').textContent="Bug Buzz";
        document.getElementById('moveButtonFour').textContent="Hidden Power Fire";
    }
}

function ubSix(){
    $('#fightTable').hide();
    $('#changeFirstPartyMember').hide();
    setTimeout(showMoveButtons, 3500);
    setTimeout(showCelesteela, 500);
    if(user.party[0]==decidueye){
        setTimeout(showDecidueye, 2500);
        document.getElementById('moveButtonOne').textContent="Swords Dance";
        document.getElementById('moveButtonTwo').textContent="Spirit Shackle";
        document.getElementById('moveButtonThree').textContent="Leaf Blade";
        document.getElementById('moveButtonFour').textContent="Sucker Punch";
    }
    if(user.party[0]==incineroar){
        setTimeout(showIncineroar, 2500);
        document.getElementById('moveButtonOne').textContent="Swords Dance";
        document.getElementById('moveButtonTwo').textContent="Flare Blitz";
        document.getElementById('moveButtonThree').textContent="Darkest Lariat";
        document.getElementById('moveButtonFour').textContent="Earthquake";
    }
    if(user.party[0]==primarina){
        setTimeout(showPrimarina, 2500);
        document.getElementById('moveButtonOne').textContent="Work Up";
        document.getElementById('moveButtonTwo').textContent="Scald";
        document.getElementById('moveButtonThree').textContent="Moonblast";
        document.getElementById('moveButtonFour').textContent="Psychic";
    }
    if(user.party[0]==crabominable){
        setTimeout(showCrabominable, 2500);
        document.getElementById('moveButtonOne').textContent="Power-Up Punch";
        document.getElementById('moveButtonTwo').textContent="Ice Hammer";
        document.getElementById('moveButtonThree').textContent="Close Combat";
        document.getElementById('moveButtonFour').textContent="Earthquake";
    }
    if(user.party[0]==oranguru){
        setTimeout(showOranguru, 2500);
        document.getElementById('moveButtonOne').textContent="Nasty Plot";
        document.getElementById('moveButtonTwo').textContent="Psychic";
        document.getElementById('moveButtonThree').textContent="Focus Blast";
        document.getElementById('moveButtonFour').textContent="Thunderbolt";
    }
    if(user.party[0]==vikavolt){
        setTimeout(showVikavolt, 2500);
        document.getElementById('moveButtonOne').textContent="Agility";
        document.getElementById('moveButtonTwo').textContent="Thunderbolt";
        document.getElementById('moveButtonThree').textContent="Bug Buzz";
        document.getElementById('moveButtonFour').textContent="Hidden Power Fire";
    }
}

function ubSeven(){
    $('#fightTable').hide();
    $('#changeFirstPartyMember').hide();
    setTimeout(showMoveButtons, 3500);
    setTimeout(showGuzzlord, 500);
    if(user.party[0]==decidueye){
        setTimeout(showDecidueye, 2500);
        document.getElementById('moveButtonOne').textContent="Swords Dance";
        document.getElementById('moveButtonTwo').textContent="Spirit Shackle";
        document.getElementById('moveButtonThree').textContent="Leaf Blade";
        document.getElementById('moveButtonFour').textContent="Sucker Punch";
    }
    if(user.party[0]==incineroar){
        setTimeout(showIncineroar, 2500);
        document.getElementById('moveButtonOne').textContent="Swords Dance";
        document.getElementById('moveButtonTwo').textContent="Flare Blitz";
        document.getElementById('moveButtonThree').textContent="Darkest Lariat";
        document.getElementById('moveButtonFour').textContent="Earthquake";
    }
    if(user.party[0]==primarina){
        setTimeout(showPrimarina, 2500);
        document.getElementById('moveButtonOne').textContent="Work Up";
        document.getElementById('moveButtonTwo').textContent="Scald";
        document.getElementById('moveButtonThree').textContent="Moonblast";
        document.getElementById('moveButtonFour').textContent="Psychic";
    }
    if(user.party[0]==crabominable){
        setTimeout(showCrabominable, 2500);
        document.getElementById('moveButtonOne').textContent="Power-Up Punch";
        document.getElementById('moveButtonTwo').textContent="Ice Hammer";
        document.getElementById('moveButtonThree').textContent="Close Combat";
        document.getElementById('moveButtonFour').textContent="Earthquake";
    }
    if(user.party[0]==oranguru){
        setTimeout(showOranguru, 2500);
        document.getElementById('moveButtonOne').textContent="Nasty Plot";
        document.getElementById('moveButtonTwo').textContent="Psychic";
        document.getElementById('moveButtonThree').textContent="Focus Blast";
        document.getElementById('moveButtonFour').textContent="Thunderbolt";
    }
    if(user.party[0]==vikavolt){
        setTimeout(showVikavolt, 2500);
        document.getElementById('moveButtonOne').textContent="Agility";
        document.getElementById('moveButtonTwo').textContent="Thunderbolt";
        document.getElementById('moveButtonThree').textContent="Bug Buzz";
        document.getElementById('moveButtonFour').textContent="Hidden Power Fire";
    }
}

function showMoveButtons(){
    $('#moveButtonOne').show();
    $('#moveButtonTwo').show();
    $('#moveButtonThree').show();
    $('#moveButtonFour').show();
}

function backToHub(){
    $('#fightTable').show();
    $('#backToHub').hide();
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