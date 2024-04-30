//regex shkruhet ne dy menyra
let regex1 = /[a-c]/ // i merr shkronjat nga a deri ne c
//let regex2 = new RegExp('[a-c') // te dy rreshtat jane  njesoj por shkruhen ndryshe

let name = "Star Rail"
console.log(regex1.exec(name))// .exec - execute?? {me ekzekutu}
//index tregon ne cilin vend eshte shkronja

//test() nese variabla ka ate shkronje ta kthen true per ndryshe ta kthen false

let cities = "London, Spain, Paris";
let rezult = cities.match("is");
console.log(rezult)
// index tregon pas cilit vend fillon fjala, "is" fillon pas index 18{ dmth fillon ne index 19}

let shega= "ein Fruh Morgen"
let fundi = shega.replace("u","ü");
console.log(fundi);
//replaceAll() , ndryshon tegjitha shkronjat e caktuara
//replace(), ndryshon vetem nshkronjen e pare te caktuar

//split()

