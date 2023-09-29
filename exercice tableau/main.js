/* COURS

let students=["eleve1", "eleve2", "eleve3"]
let numbers = [12, 7, 8]
let things = ["bonjour", 12, 7, true, 12]
let fruits = ["pomme", "poire", "pêche"]

let threadAnswers=[
    "ekfjvnrjj", 
    "trop bien",
    "je déteste",
    "ekfjvnrjj", 
    "trop bien",
    "je déteste",
    "ekfjvnrjj", 
    "trop bien",
    "je déteste",
    "ekfjvnrjj", 
    "trop bien",
    "je déteste",
]

console.log(threadAnswers.length)

for(let i=0; i<threadAnswers.length; i++) {
    threadAnswers[i]= threadAnswers[i]+ "NOONN"
    console.log(threadAnswers[i])
}

let cart=["pomme", "ps5", "twitter"]

console.log(cart)
cart.push("IIM")
console.log(cart)

cart.splice(1,1)

console.log(cart)*/




let names=[]
names.push("vincent ")
names.push("paul ")
names.push("arthur ")

/*EXERCICE 

for(let i=0; i<names.length; i++) {
    names[i]= names[i]+ "va à la pêche"
    console.log(names[i])
}*/

names.forEach((element) => {
    element+="va à la pêche"
    console.log(element)

})
