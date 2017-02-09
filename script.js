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
    $('#confirmTeam').show();
    $('#chooseTeam').hide();
    $('#teamMessage').fadeIn(2000);
}

function confirmTeam(){
    var yesNo=confirm("You have chosen "+user.party[0].name+", "+user.party[1].name+", and "+user.party[2].name+". Is this alright?");
    if(yesNo==true){
        $('#teamMessage').fadeOut(500);
        $('#tableId').show();
        $('#confirmTeam').hide();
        $('#chooseDecidueye').hide();
        $('#chooseIncineroar').hide();
        $('#choosePrimarina').hide();
        $('#chooseCrabominable').hide();
        $('#chooseOranguru').hide();
        $('#chooseVikavolt').hide();
        $('#confirmTeam').hide();
        console.log("Current party: "+user.party[0].name+", "+user.party[1].name+", "+user.party[2].name);
    }
    else{
        user.party=[];
    }
}

function areaOne(){}
function areaTwo(){}
function areaThree(){}
function areaFour(){}
function areaFive(){}
function areaSix(){}
function areaSeven(){}


$(document).ready(function(){
    $('#openingMessage').hide();
    $('#teamMessage').hide();
    $('#tableId').hide();
    $('#chooseDecidueye').hide();
    $('#chooseIncineroar').hide();
    $('#choosePrimarina').hide();
    $('#chooseCrabominable').hide();
    $('#chooseOranguru').hide();
    $('#chooseVikavolt').hide();
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