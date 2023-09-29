let music=randInt(5)
let musicList=["Le temps des tempêtes - Sarcozy",
    "René la Taupe - René la Taupe", 
    "Ladybug opening cover - Kaaris", 
    "Toccata et fugue en ré mineur - Jean-Sébastien Bach",
    "Anissa - Wejdene"]  //liste des musiques

function randInt(maxmusic) {
    return Math.floor(Math.random()*maxmusic);
}

class chara {
    constructor(name, sanity) {
        this.name=name //nom
        this.sanity=sanity //santé mentale
    }

    trajet(array) {

        let feuRouge=0

        while(this.sanity>0 && feuRouge<30) {

            console.log("\n")
            const random=Math.floor(Math.random()*musicList.length)
            console.log(random,"Le morceau "+musicList[random]+" joue à la radio.")

            feuRouge ++
            console.log("\t"+feuRouge+" feus rouges ont été franchis.")
            
            if (feuRouge===30) {
                let nbrChange=10-this.sanity
                console.log("\tJohn est arrivé à destination, VA CREVER ANISSA! Il lui aura fallu "+nbrChange+" changements.")
                break
            }

            if (array[random]=="Anissa - Wejdene") {
                console.log("\tJohn sort du taxi en insultant le conducteur pour ses goûts musicaux douteux.")
                this.sanity-=1
                console.log("\tIl reste "+this.sanity+" de santé mentale à John.")
            }

            if(john.sanity==0) {
                console.log("\tJohn a explosé à cause d'Anissa, c'est tragique.")
            }
        }
    }
}

let john=new chara("John",10)
john.trajet(musicList)




