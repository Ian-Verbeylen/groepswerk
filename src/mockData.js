// Mock version of JSON API returning data

// User data, to be completed
const users = [
  { name: "Student1" },
  { name: "Student2" },
  { name: "Student3" },
];

// Recipes, to be completed
const recepten = [
  { name: "Stoofvlees", category: "rundsvlees" },
  { name: "Spaghetti bolognaise", category: "pasta" },
  { name: "Grootmoeders kip", category: "kip" },
  { name: "Spaghetti bolognaise", category: "pasta" },
  { name: "Grootmoeders kip", category: "kip" },
  { name: "Spaghetti bolognaise", category: "pasta" },
  { name: "Fruitsalade", category: "fruit" },
  { name: "Banana split", category: "ijs" },
  { name: "Mosselen", category: "mosselen" },
  { name: "Fruitsalade", category: "fruit" },
  { name: "Banana split", category: "ijs" },
  { name: "Mosselen", category: "mosselen" },
  { name: "Stoofvlees", category: "rundsvlees" },
  { name: "Spaghetti bolognaise", category: "pasta" },
  { name: "Grootmoeders kip", category: "kip" },
  { name: "Fruitsalade", category: "fruit" },
  { name: "Banana split", category: "ijs" },
  { name: "Mosselen", category: "mosselen" },
];

// Frigo
// note: boolean to show stuk vs stuks
// note: when adding a new ingredient to the fridge: change unit depending on ingredient getting added

// possibilities for unit: stuks, gr, ml, ...?
const frigo = [
  { name: "Brocolli", amount: 1, unit: "stuks", expirationDate: "02/06/2022" },
  { name: "Bloemkool", amount: 1, unit: "stuks", expirationDate: "02/06/2022" },
  { name: "Gehakt", amount: 1, unit: "stuks", expirationDate: "02/06/2022" },
  { name: "Chocolade", amount: 100, unit: "gr", expirationDate: "02/06/2022" },
  {
    name: "Spuitwater",
    amount: 1000,
    unit: "ml",
    expirationDate: "02/06/2022",
  },
  { name: "Ei", amount: 6, unit: "stuks", expirationDate: "02/06/2022" },
  { name: "Steak", amount: 500, unit: "gr", expirationDate: "02/06/2022" },
  { name: "Melk", amount: 900, unit: "ml", expirationDate: "02/06/2022" },
];
