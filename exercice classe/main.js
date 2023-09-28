/* COURS

class hero {
    constructor(name, attack, pv) {
        this.name=name
        this.attack=attack
        this.pv=pv
    }

    getLife(){
        console.log(this.pv)
    }
}

class monsters {
    constructor(pv, attack) {
        this.pv=pv
        this.attack=attack
    }
}

let reinor=new hero("reinor", 120, 300)
let gnome=new monsters(10,200)

reinor.getLife()

if (gnome.pv -= reinor.attack <= 0) {
    console.log("le gnome est mort.")
}*/

class pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name=name
        this.attack=attack
        this.defense=defense
        this.hp=hp
        this.luck=luck
    }
    attackPokemon(pokemon){
        pokemon.hp-=this.attack
    }
}

let Anne=new pokemon("Anne", 200, 300, 2500, 0.4)
let Marc=new pokemon("Marc", 150, 350, 2000, 0.9)

while(Marc.hp>0 && Anne.hp>0) {

    Marc.attackPokemon(Anne)
    console.log("Marc inflige 150 dégâts à Anne avec une remarque désobligeante. Il reste " + Anne.hp + " PV à Anne.")
    if(Anne.hp==0) {
        break  
    }

    Anne.attackPokemon(Marc)
    console.log("Anne inflige 200 dégâts à Marc avec une claque bien placée. Il reste " + Marc.hp + " PV à Marc.")
    if(Marc.hp==0) {
        break
    }
    else {
        continue
    }

}

if(Marc.hp==0) {
    console.log("Marc est décédé. Bien fait.")

}
if(Anne.hp==0) {
    console.log("Anne est décédée. Mais en même temps c'est bien fait aussi.")
}