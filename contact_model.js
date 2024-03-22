import Database from "better-sqlite3";

const db = new Database("contacts.db");

const search = (query) => {
  const search = db.prepare("SELECT * FROM Contacts WHERE first LIKE ?");
  return search.all(`%${query}%`);
};

const all = () => {
  return db.prepare("SELECT * FROM Contacts").all();
};

export { search, all };
