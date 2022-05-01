// Mock version of JSON API returning data

// User data, to be completed
export const USERS = [
  { id: 1, name: "Student1" },
  { id: 2, name: "Student2" },
  { id: 3, name: "Student3" },
];

// Recipes, to be completed
export const RECIPES = [
  { id: 1, name: "Stoofvlees", category: "rundsvlees" },
  { id: 2, name: "Spaghetti bolognaise", category: "pasta" },
  { id: 3, name: "Grootmoeders kip", category: "kip" },
  { id: 4, name: "Spaghetti bolognaise", category: "pasta" },
  { id: 5, name: "Grootmoeders kip", category: "kip" },
  { id: 6, name: "Spaghetti bolognaise", category: "pasta" },
  { id: 7, name: "Fruitsalade", category: "fruit" },
  { id: 8, name: "Banana split", category: "ijs" },
  { id: 9, name: "Mosselen", category: "mosselen" },
  { id: 10, name: "Fruitsalade", category: "fruit" },
  { id: 11, name: "Banana split", category: "ijs" },
  { id: 12, name: "Mosselen", category: "mosselen" },
  { id: 13, name: "Stoofvlees", category: "rundsvlees" },
  { id: 14, name: "Spaghetti bolognaise", category: "pasta" },
  { id: 15, name: "Grootmoeders kip", category: "kip" },
  { id: 16, name: "Fruitsalade", category: "fruit" },
  { id: 17, name: "Banana split", category: "ijs" },
  { id: 18, name: "Mosselen", category: "mosselen" },
];

// Frigo
// note: boolean to show stuk vs stuks
// note: when adding a new ingredient to the fridge: change unit depending on ingredient getting added

// possibilities for unit: stuks, gr, ml, ...?
export const FRIDGE = [
  {
    id: 1,
    name: "Brocolli",
    amount: 1,
    unit: "stuks",
    expirationDate: "02/06/2022",
  },
  {
    id: 2,
    name: "Bloemkool",
    amount: 1,
    unit: "stuks",
    expirationDate: "02/06/2022",
  },
  {
    id: 3,
    name: "Gehakt",
    amount: 1,
    unit: "stuks",
    expirationDate: "02/06/2022",
  },
  {
    id: 4,
    name: "Chocolade",
    amount: 100,
    unit: "gr",
    expirationDate: "02/06/2022",
  },
  {
    id: 5,
    name: "Spuitwater",
    amount: 1000,
    unit: "ml",
    expirationDate: "02/06/2022",
  },
  { id: 6, name: "Ei", amount: 6, unit: "stuks", expirationDate: "02/06/2022" },
  {
    id: 7,
    name: "Steak",
    amount: 500,
    unit: "gr",
    expirationDate: "02/06/2022",
  },
  {
    id: 8,
    name: "Melk",
    amount: 900,
    unit: "ml",
    expirationDate: "02/06/2022",
  },
];

export const INGREDIENTS = [
  { id: 1, name: "Brood" },
  { id: 2, name: "Hesp" },
  { id: 3, name: "Kaas" },
  { id: 4, name: "Sla" },
  { id: 5, name: "Tomaat" },
  { id: 6, name: "Salami" },
];
