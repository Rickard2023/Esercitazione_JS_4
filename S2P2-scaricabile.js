// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

- Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche 
  gli utenti speciali pagano le spedizioni). (FATTO)
- Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato. (FATTO)
- In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore 
  fornito per coprire il costo della spedizione. (FATTO)

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
- Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" 
 basandoti sui dati contenuti nell'oggetto. (FATTO)
 ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
- Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador. (FATTO)
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const elenor = {
  name: "Elenor",
  lastName: "White",
  isAmbassador: false,
}

const clorinde = {
  name: "Clorinde",
  lastName: "Gautier",
  isAmbassador: true,
}

const jason = {
  name: "Jason",
  lastName: "Joyce",
  isAmbassador: true,
}

const prices = [90, 5, 2]
const shippingCost = 50

let users = [marco,paul,amy, elenor, clorinde, jason];
let userlist = [];
let ambassadors = [];
for(let i = 0; i < users.length; i++)
{
  userlist.push(users[i]);
 
  if(userlist[i].isAmbassador){
    ambassadors.push(userlist[i]);
  }
  console.log(userlist[i].name + " " + userlist[i].lastName + " " + "isAmbassador? = " + userlist[i].isAmbassador);
}

  let buyer = jason; //cambia il valore qui per provare se il tuo algoritmo funziona!
  let totalCart = 0;
  for(let p = 0; p < prices.length; p++)
  {
    let off = buyer.isAmbassador ? (prices[p] / 100) * 30 : 0;
    totalCart += prices[p] - off;
  }

  if(totalCart < 100)
    totalCart += shippingCost;

  console.log("total cart is " + totalCart + " for " + buyer.name);

/* Controllare tutti gli utenti in una volta sola
for(let b = 0; b < userlist.length; b++)
{
  let buyer = userlist[b];
  if(!buyer)
      break;

  let totalCart = 0;

  for(let p = 0; p < prices.length; p++)
  {
    let off = buyer.isAmbassador ? (prices[p] / 100) * 30 : 0;
    totalCart += prices[p] - off;
  }

  if(totalCart < 100)
    totalCart += shippingCost;
  console.log("total cart is " + totalCart + " for " + buyer.name + " Ambassador = ", buyer.isAmbassador);
}
*/