import { search, all } from "./contact_model.js";

const barResult = search("bar");
const allContacts = all();

console.log(`Matches for 'bar': ${barResult}`);
barResult.forEach((contact) => console.log(contact));

console.log("All contacts:");
allContacts.forEach((contact) => console.log(contact));
