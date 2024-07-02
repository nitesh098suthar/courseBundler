// const name = {
//   firstName: "nitesh",
//   lastName: "kumar",
// };


// const middleName = {
//   middleName: "sharma",
// };

// const newObject = {}

// newObject.firstName = "nitesh"
// newObject.lastName = "kumar"
// newObject.middleName = "sharma"

// console.log(newObject)

const arr = [
  { id: 1, price: 10, category: "Food", itemName: "Pizza" },
  { id: 2, price: 30, category: "Drink", itemName: "Coke" },
  { id: 3, price: 50, category: "Food", itemName: "Burger" },
];

const total = arr.filter((item)=>item.category === "Food")

const priceTotal = total.reduce((acc, item)=>{
   return acc +=item.price
}, 0)

console.log(priceTotal)


