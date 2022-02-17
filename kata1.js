const scores = ["2:4", "3:2", "1:1", "3:4"] // esercizio che confronta i risultati di calcio vittoria della prima +3 pareggio +1 sconfitta 0
const scores1 = ["2:4", "3:2", "1:1", "3:4" ,"1:1", "3:4"]
function points(games) {
   let score = 0;
   for (const game of games) {
       const numbers = game.split(":");  // lo split quando incontra un carattere che decidiamo noi nella parentesi() fa un array di due numeri
       const number1 = parseInt(numbers[0]);
       const number2 = parseInt(numbers[1]);
       if (number1 > number2) {
           score += 3;
       }else if (number1 === number2) {
           score +=1;
       }
   } 
   return score;
}

console.log("Mi aspetto 4, ho ottenuto: ", points(scores));
console.log("Mi aspetto 5, ho ottenuto: ", points(scores1));

