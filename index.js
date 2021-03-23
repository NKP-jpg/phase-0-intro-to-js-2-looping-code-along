const names = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    return `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  }
  return names;
}
writeCards(names);




// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old.  Happy birthday to me!`);

// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//   return gifts;
// }
// wrapGifts(gifts);
