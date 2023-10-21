//===================================================================================//
//                                  Easy Going
//===================================================================================//
// for (i = 1; i <= 20; i++) {
//   console.log(i);
// }
//===================================================================================//
//                                  Get Even
//===================================================================================//
// for (i=2;i<=200; i+=2){
// console.log(i);
// }
//===================================================================================//
//                                  Fizz Buzz
//===================================================================================//
// for (i=0;i<100;i++){
//     if (i%3===0 && i%5===0){
//         console.log('FizzBuzz')
//     }else if(i%3===0){
//         console.log('Fizz');
//     }else if(i%5===0){
//         console.log('Buzz');
//     }else{
//         console.log(i);
//     }
// }
//===================================================================================//
//                                 Wild Wild Life
//===================================================================================//
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant", 5000, "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
// plantee[2] = 50001;
// console.log(plantee);
// // Revisit this to explore other methods:
// wolfy[3] = "Gotham City";
// console.log(wolfy);
// dart[4] = "Hawkins";
// console.log(dart);
// wolfy[0] = "Gameboy";
// console.log(wolfy);
//===================================================================================//
//                               Yell at the Ninja Turtles
//===================================================================================//
// let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// for (let member of ninjaTurtles){
//     console.log(member.toUpperCase());
// }
//===================================================================================//
//                               Methods, Revisited
//===================================================================================//
// const favMovies = [
//   "Jaws",
//   "The Fellowship of the Ring",
//   "Howl's Moving Castle",
//   "Django Unchained",
//   "Cloud Atlas",
//   "The Usual Suspects",
//   "Toy Story",
//   "Conan the Barbarian",
//   "Titanic",
//   "Harry Potter",
//   "Fried Green Tomatoes",
//   "Volver",
//   "Oculus",
//   "Seven",
//   "Black Panther",
//   "Harry Potter",
//   "Imitation of Life",
//   "Snatch",
//   "Fast and Furious",
// ];
// console.log(favMovies.indexOf("Titanic"));
// console.log(favMovies.sort());
// favMovies.pop();
// console.log(favMovies);
// favMovies.reverse();
// console.log(favMovies);
// favMovies.shift();
// console.log(favMovies);
// console.log(favMovies.unshift("Sixth Sense"));
// let spliceIndex = favMovies.indexOf("Django Unchained");
// favMovies.splice(spliceIndex, 1, "Avatar");
// console.log(favMovies);
// let arrayLength = favMovies.length;
// let slicedPart = favMovies.slice(arrayLength / 2);
// console.log(slicedPart);
// console.log(favMovies);
// console.log(favMovies.indexOf("Fast and Furious"));
// console.log(favMovies.indexOf("Django Unchained"));
//===================================================================================//
//                                 Where is Waldo
//===================================================================================//
// const whereIsWaldo = [
//   ["Timmy", "Frank"],
//   "Eggbert",
//   ["Lucinda", "Jacc", "Neff", "Snoop"],
//   ["Petunia", ["Baked Goods", "Waldo"]],
// ];
// let indexID = whereIsWaldo.indexOf("Eggbert");
// whereIsWaldo.splice(indexID, 1);
// console.log(whereIsWaldo);
// whereIsWaldo[1][2] = "No One";
// console.log(whereIsWaldo);
// console.log(whereIsWaldo[2][1][1]);
//===================================================================================//
//                              Excited Kitten
//===================================================================================//
// const kittySays = [
//   "...human... why you taking pictures of me...?",
//   "...the catnip made me do it...",
//   "...why does the red dot always get away...?",
// ];

// for (i = 0; i < 20; i++) {
//   let randomNum = Math.round(Math.random() * 2);
//   if (i % 2 === 0) {
//     console.log(kittySays[randomNum]);
//   } else {
//     console.log("Love me, pet me! HSSSSSS!");
//   }
// }
//===================================================================================//
//                              Find the Median
//===================================================================================//
// const nums = [
//   14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
//   17, 12, 71, 18, 15, 12,
// ];
// console.log(nums.sort());
// console.log(nums[Math.ceil(nums.length / 2)]);
//===================================================================================//
//                           "Hungry for more?" section
//===================================================================================//
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];
//===================================================================================//
//                          Lost shoe
//===================================================================================//
let kristynsShoe = kristynsCloset.shift();
console.log(kristynsCloset);
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset);
//===================================================================================//
//                          Outfits
//===================================================================================//

// console.log(
//   `Kristyn, your first outfit: ${kristynsCloset[0]}, ${kristynsCloset[1]}, ${kristynsCloset[2]}`
// );
// console.log(
//   `Your second outfit: ${kristynsCloset[2]}, ${kristynsCloset[3]}, ${kristynsCloset[4]}`
// );
// console.log(
//   `And your third outfit: ${kristynsCloset[4]}, ${kristynsCloset[5]}, ${kristynsCloset[0]}`
// );
// console.log(`Thom, your first outfit: ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, ${thomsCloset[2][0]}`);
// console.log(`Your second outfit: ${thomsCloset[0][1]}, ${thomsCloset[1][1]}, ${thomsCloset[2][1]}`);
// console.log(`And your third outfit: ${thomsCloset[0][2]}, ${thomsCloset[1][2]}, ${thomsCloset[2][2]}`);
//===================================================================================//
//                          Washed dirty laundry
//===================================================================================//

for (i=0; i<kristynsCloset.length;i++){
  console.log(`WHIRR: Now washing ${kristynsCloset[i]}.`);
}