let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function generarNombres(pronoun, adj, noun) {
  const nombres = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        nombres.push(`${p} ${a} ${n}`);
      }
    }
  }

  return nombres;
}

const nombresGenerados = generarNombres(pronoun, adj, noun);
console.log(nombresGenerados);
