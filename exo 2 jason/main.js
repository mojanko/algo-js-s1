let randoName=["Marc","Annick","Anne","Soraya","Alexandra","Chataléré","Dr. Juiphe",
"Marina","Patrice","Philippe","Yvan","Hervé","Jean-Guy","William","Soso","Carole"] //liste des survivants

let randoType=["avare","alcoolique","mythomane","exhibitionniste","blondasse","le relou là",
"fan d'horreur","abruti fini","woman beater","wejdene enthusiast"]

function randInt(max) {
    return Math.floor(Math.random()*max)
}

class tueur {
    constructor(name, hp) {
        this.name=name
        this.hp=hp
        this.isAlive=true
    }
}

let jason=new tueur("Jason", 100)
console.log(jason)

class survivant {
    constructor() {
        this.name=randoName[randInt(randoName.length)] //choisit un nom random de la liste
        this.type=randoType[randInt(randoType.length)] //choisit un caractéristique random
        this.isAlive=true
    }
}

let surv1=new survivant()
let surv2=new survivant()
let surv3=new survivant()
let surv4=new survivant()
let surv5=new survivant()