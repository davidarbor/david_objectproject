/**
 * Created by h205p2 on 1/13/17.
 */
function Character(name){
    this.name=name;
    this.party=[];
    this.addToParty=function(partyMember){
        this.party.push(partyMember);
    }
}

function Partner(name, type1, type2, maxhp, currenthp, attack, defense, specialAttack, specialDefense, speed, selectionImage, battleImage, icon){
    this.name=name;
    this.type1=type1;
    this.type2=type2;
    this.maxhp=maxhp;
    this.currenthp=currenthp;
    this.attack=attack;
    this.defense=defense;
    this.specialAttack=specialAttack;
    this.specialDefense=specialDefense;
    this.speed=speed;
    isAlive=true;
    this.moves=[];
    this.addMove=function(move){
        this.moves.push(move);
    };
    this.weaknesses=[];
    this.neutralDamage=[];
    this.resistances=[];
    this.immunities=[];
    this.selectionImage=selectionImage;
    this.battleImage=battleImage;
    this.icon=icon;
}

function Enemy(name, type1, type2, maxhp, currenthp, attack, defense, specialAttack, specialDefense, speed, battleImage) {
    this.name=name;
    this.type1=type1;
    this.type2=type2;
    this.maxhp=maxhp;
    this.currenthp=currenthp;
    this.attack=attack;
    this.defense=defense;
    this.specialAttack=specialAttack;
    this.specialDefense=specialDefense;
    this.speed=speed;
    isAlive=true;
    this.moves=[];
    this.addMove=function(move){
        this.moves.push(move);
    }
    this.weaknesses=[];
    this.neutralDamage=[];
    this.resistances=[];
    this.immunities=[];
    this.battleImage=battleImage;
}

function Move(name, type, category, basePower, baseAccuracy, priority){
    this.name=name;
    this.type=type;
    this.category=category;
    this.basePower=basePower;
    this.baseAccuracy=baseAccuracy;
    this.priority=priority;
}

var swordsDance=new Move("Swords Dance", "Normal", "Status", 0, 0, 0);
var spiritShackle=new Move("Spirit Shackle", "Ghost", "Physical", 80, 100, 0);
var leafBlade=new Move("Leaf Blade", "Grass", "Physical", 90, 100, 0);
var suckerPunch=new Move("Sucker Punch", "Dark", "Physical", 70, 100, 1);
var flareBlitz=new Move("Flare Blitz", "Fire", "Physical", 120, 100, 0);
var darkestLariat=new Move("Darkest Lariat", "Dark", "Physical", 85, 100, 0);
var earthquake=new Move("Earthquake", "Ground", "Physical", 100, 100, 0);
var workUp=new Move("Work Up", "Normal", "Status", 0, 0, 0);
var scald=new Move("Scald", "Water", "Special", 80, 100, 0);
var moonblast=new Move("Moonblast", "Fairy", "Special", 95, 100, 0);
var psychic=new Move("Psychic", "Psychic", "Special", 90, 100, 0);
var powerUpPunch=new Move("Power-Up Punch", "Fighting", "Physical", 40, 100, 0);
var iceHammer=new Move("Ice Hammer", "Ice", "Physical", 100, 90, 0);
var closeCombat=new Move("Close Combat", "Fighting", "Physical", 120, 100, 0);
var nastyPlot=new Move("Nasty Plot", "Dark", "Status", 0, 0, 0);
var focusBlast=new Move("Focus Blast", "Fighting", "Special", 120, 70, 0);
var agility=new Move("Agility", "Psychic", "Status", 0, 0, 0);
var bugBuzz=new Move("Bug Buzz", "Bug", "Special", 90, 100, 0);

var sludgeWave=new Move("Sludge Wave", "Poison", "Special", 95, 100, 0);
var powerGem=new Move("Power Gem", "Rock", "Special", 80, 100, 0);
var dazzlingGleam=new Move("Dazzling Gleam", "Fairy", "Special", 80, 100, 0);
var hiddenPowerFire=new Move("Hidden Power Fire", "Fire", "Special", 60, 100, 0);
var bulkUp=new Move("Bulk Up", "Fighting", "Status", 0, 0, 0);
var leechLife=new Move("Leech Life", "Bug", "Physical", 80, 100, 0);
var superpower=new Move("Superpower", "Fighting", "Physical", 120, 100, 0);
var stoneEdge=new Move("Stone Edge", "Rock", "Physical", 100, 80, 0);
var highJumpKick=new Move("High Jump Kick", "Fighting", "Physical", 130, 90, 0);
var iceBeam=new Move("Ice Beam", "Ice", "Special", 90, 100, 0);
var poisonJab=new Move("Poison Jab", "Poison", "Physical", 80, 100, 0);
var thunderbolt=new Move("Thunderbolt", "Electric", "Special", 90, 100, 0);
var hiddenPowerIce=new Move("Hidden Power Ice", "Ice", "Special", 60, 100, 0);
var grassKnot=new Move("Grass Knot", "Grass", "Special", 80, 100, 0);
var smartStrike=new Move("Smart Strike", "Steel", "Physical", 70, 100, 0);
var nightSlash=new Move("Night Slash", "Dark", "Physical", 70, 100, 0);
var sacredSword=new Move("Sacred Sword", "Fighting", "Physical", 90, 100, 0);
var leechSeed=new Move("Leech Seed", "Grass", "Status", 0, 90, 0);
var heavySlam=new Move("Heavy Slam", "Steel", "Physical", 120, 100, 0);
var ironDefense=new Move("Iron Defense", "Steel", "Status", 0, 0, 0);
var flamethrower=new Move("Flamethrower", "Fire", "Special", 90, 100, 0);
var crunch=new Move("Crunch", "Dark", "Physical", 80, 100, 0);
var dragonTail=new Move("Dragon Tail", "Dragon", "Physical", 60, 90, -6);
var fireBlast=new Move("Fire Blast", "Fire", "Special", 110, 85, 0);

var activeMon=new Partner(this.name, this.type1, this.type2, this.maxhp, this.currenthp, this.attack, this.defense, this.specialAttack, this.specialDefense, this.speed, this.selectionImage, this.battleImage, this.icon);
var currentUB=new Enemy(this.name, this.type1, this.type2, this.maxhp, this.currenthp, this.attack, this.defense, this.specialAttack, this.specialDefense, this.speed, this.battleImage);

var decidueye=new Partner("Decidueye", "Grass", "Ghost", 298, 298, 313, 186, 212, 236, 262, "img/Decidueye.png", "img/decidueyeSprite.png", "img/decidueyeIcon.png");
decidueye.addMove(swordsDance);
decidueye.addMove(spiritShackle);
decidueye.addMove(leafBlade);
decidueye.addMove(suckerPunch);
decidueye.weaknesess=["Flying", "Ghost", "Fire", "Ice", "Dark"];
decidueye.neutralDamage=["Poison", "Rock", "Bug", "Steel", "Psychic", "Dragon", "Fairy"];
decidueye.resistances=["Ground", "Water", "Grass", "Electric"];
decidueye.immunities=["Normal", "Fighting"];

var incineroar=new Partner("Incineroar", "Fire", "Dark", 332, 332, 329, 216, 176, 216, 240, "img/Incineroar.png", "img/incineroarSprite.png", "img/incineroarIcon.png");
incineroar.addMove(swordsDance);
incineroar.addMove(flareBlitz);
incineroar.addMove(darkestLariat);
incineroar.addMove(earthquake);
incineroar.weaknesess=["Fighting", "Ground", "Rock", "Water"];
incineroar.neutralDamage=["Normal", "Flying", "Poison", "Bug", "Electric", "Dragon", "Fairy"];
incineroar.resistances=["Ghost", "Steel", "Fire", "Grass", "Ice", "Dark"];
incineroar.immunities=["Psychic"];

var primarina=new Partner("Primarina", "Water", "Fairy", 364, 364, 165, 185, 386, 268, 156, "img/Primarina.png", "img/primarinaSprite.png", "img/primarinaIcon.png");
primarina.addMove(workUp);
primarina.addMove(scald);
primarina.addMove(moonblast);
primarina.addMove(psychic);
primarina.weaknesess=["Poison", "Grass", "Electric"];
primarina.neutralDamage=["Normal", "Flying", "Ground", "Rock", "Ghost", "Steel", "Psychic", "Fairy"];
primarina.resistances=["Fighting", "Bug", "Fire", "Water", "Ice", "Dark"];
primarina.immunities=["Dragon"];

var crabominable=new Partner("Crabominable", "Fighting", "Ice", 398, 398, 399, 190, 144, 171, 122, "img/Crabominable.png", "img/crabominableSprite.png", "img/crabominableIcon.png");
crabominable.addMove(powerUpPunch);
crabominable.addMove(iceHammer);
crabominable.addMove(closeCombat);
crabominable.addMove(earthquake);
crabominable.weaknesess=["Fighting", "Flying", "Steel", "Fire", "Psychic", "Fairy"];
crabominable.neutralDamage=["Normal", "Poison", "Ground", "Rock", "Ghost", "Water", "Grass", "Electric", "Dragon"];
crabominable.resistances=["Bug", "Grass", "Dark"];
crabominable.immunities=[];

var oranguru=new Partner("Oranguru", "Normal", "Psychic", 384, 384, 140, 197, 306, 256, 156, "img/Oranguru.png", "img/oranguruSprite.png", "img/oranguruIcon.png");
oranguru.addMove(nastyPlot);
oranguru.addMove(psychic);
oranguru.addMove(focusBlast);
oranguru.addMove(thunderbolt);
oranguru.weaknesess=["Bug", "Dark"];
oranguru.neutralDamage=["Normal", "Fighting", "Flying", "Poison", "Ground", "Rock", "Steel", "Fire", "Water", "Grass", "Electric", "Ice", "Dragon", "Fairy"];
oranguru.resistances=["Psychic"];
oranguru.immunities=["Ghost"];

var vikavolt=new Partner("Vikavolt", "Bug", "Electric", 296, 296, 158, 216, 389, 186, 203, "img/Vikavolt.png", "img/vikavoltSprite.png", "img/vikavoltIcon.png");
vikavolt.addMove(agility);
vikavolt.addMove(thunderbolt);
vikavolt.addMove(bugBuzz);
vikavolt.addMove(hiddenPowerFire);
vikavolt.weaknesess=["Rock", "Fire"];
vikavolt.neutralDamage=["Normal", "Flying", "Poison", "Bug", "Ghost", "Water", "Psychic", "Ice", "Dragon", "Dark", "Fairy"];
vikavolt.resistances=["Fighting", "Steel", "Grass", "Electric"];
vikavolt.immunities=["Ground"];

var nihilego=new Enemy("Nihilego", "Rock", "Poison", 360, 360, 127, 130, 353, 298, 335, "img/nihilegoSprite.png");
nihilego.addMove(sludgeWave);
nihilego.addMove(powerGem);
nihilego.addMove(dazzlingGleam);
nihilego.addMove(hiddenPowerFire);
nihilego.weaknesess=["Ground", "Steel", "Water", "Pyshcic"];
nihilego.neutralDamage=["Fighting", "Rock", "Ghost", "Grass", "Electric", "Ice", "Dragon", "Dark"];
nihilego.resistances=["Normal", "Flying", "Poison", "Bug", "Fire", "Fairy"];
nihilego.immunities=[];

var buzzwole=new Enemy("Buzzwole", "Bug", "Fighting", 417, 417, 316, 314, 127, 225, 194, "img/buzzwoleSprite.png");
buzzwole.addMove(bulkUp);
buzzwole.addMove(leechLife);
buzzwole.addMove(superpower);
buzzwole.addMove(stoneEdge);
buzzwole.weaknesess=["Flying", "Fire", "Psychic", "Fairy"];
buzzwole.neutralDamage=["Normal", "Poison", "Rock", "Ghost", "Steel", "Water", "Electric", "Ice", "Dragon"];
buzzwole.resistances=["Fighting", "Ground", "Bug", "Grass", "Dark"];
buzzwole.immunities=[];

var pheromosa=new Enemy("Pheromosa", "Bug", "Fighting", 283, 283, 373, 110, 311, 99, 441, "img/pheromosaSprite.png");
pheromosa.addMove(highJumpKick);
pheromosa.addMove(bugBuzz);
pheromosa.addMove(iceBeam);
pheromosa.addMove(poisonJab);
pheromosa.weaknesess=["Flying", "Fire", "Psychic", "Fairy"];
pheromosa.neutralDamage=["Normal", "Poison", "Rock", "Ghost", "Steel", "Water", "Electric", "Ice", "Dragon"];
pheromosa.resistances=["Fighting", "Ground", "Bug", "Grass", "Dark"];
pheromosa.immunities=[];

var xurkitree=new Enemy("Xurkitree", "Electric", "none", 308, 308, 192, 178, 445, 178, 291, "img/xurkitreeSprite.png");
xurkitree.addMove(thunderbolt);
xurkitree.addMove(hiddenPowerIce);
xurkitree.addMove(grassKnot);
xurkitree.addMove(dazzlingGleam);
xurkitree.weaknesess=["Ground"];
xurkitree.neutralDamage=["Normal", "Fighting", "Poison", "Rock", "Bug", "Ghost", "Fire", "Water", "Grass", "Psychic", "Ice", "Dragon", "Dark", "Fairy"];
xurkitree.resistances=["Flying", "Steel", "Electric"];
xurkitree.immunities=[];

var kartana=new Enemy("Kartana", "Grass", "Steel", 259, 259, 460, 298, 138, 100, 348, "img/kartanaSprite.png");
kartana.addMove(smartStrike);
kartana.addMove(leafBlade);
kartana.addMove(nightSlash);
kartana.addMove(sacredSword);
kartana.weaknesess=["Fighting", "Fire"];
kartana.neutralDamage=["Flying", "Ground", "Bug", "Ghost", "Ice", "Dark"];
kartana.resistances=["Normal", "Rock", "Steel", "Water", "Grass", "Electric", "Psychic", "Dragon", "Fairy"];
kartana.immunities=["Poison"];

var celesteela=new Enemy("Celesteela", "Steel", "Flying", 398, 398, 238, 255, 251, 288, 158, "img/celesteelaSprite.png");
celesteela.addMove(leechSeed);
celesteela.addMove(heavySlam);
celesteela.addMove(ironDefense);
celesteela.addMove(flamethrower);
celesteela.weaknesess=["Fire", "Electric"];
celesteela.neutralDamage=["Fighting", "Rock", "Ghost", "Water", "Ice", "Dark"];
celesteela.resistances=["Normal", "Flying", "Bug", "Steel", "Grass", "Psychic", "Dragon", "Fairy"];
celesteela.immunities=["Poison", "Ground"];

var guzzlord=new Enemy("Guzzlord", "Dark", "Dragon", 588, 588, 261, 192, 256, 192, 109, "img/guzzlordSprite.png");
guzzlord.addMove(crunch);
guzzlord.addMove(dragonTail);
guzzlord.addMove(fireBlast);
guzzlord.addMove(earthquake);
guzzlord.weaknesess=["Fighting", "Bug", "Ice", "Dragon", "Fairy"];
guzzlord.neutralDamage=["Normal", "Flying", "Poison", "Ground", "Rock", "Steel"];
guzzlord.resistances=["Ghost", "Fire", "Water", "Grass", "Electric", "Dark"];
guzzlord.immunities=["Psychic"];