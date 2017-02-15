// function total (){

var item1 =
   {name: "Broccoli",
   type: "vegetable",
   healthy: true,
   price: .50
};

var item2 =
   {name: "Goldfish",
   type: "snack",
   healthy: false,
   price: 3.29
};

var item3 =
   {name: "Rice",
   type: "grain",
   healthy: true,
   price: 1.20
};

var groceryList = [item1, item2, item3];
//
// console.log(petObject1.name);
//
// petObjects.name;
// var groceryPrice = [
//   1.30,2.30,6.50,3
// ];
var total=0;

for(var i=0 ; i < groceryList.length ; i++) {
  console.log(groceryList[i].name + " " + groceryList[i].price);
  total = total + groceryList[i].price;
}

console.log("total: "+total);
//
// }

// total();
