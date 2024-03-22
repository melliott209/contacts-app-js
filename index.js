import express from "express";
import pug from "pug";
import { search, all } from "./contact_model.js";

const app = express();
const port = 3000;

const indexPage = pug.compileFile("index.pug");

app.get("/", (req, res) => {
  res.redirect("/contacts");
});

app.get("/contacts", (req, res) => {
  const q = req.query.q;
  let contacts;
  if (q) {
    contacts = search(q);
  } else {
    contacts = all();
  }
  // Return template
  res.send(
    indexPage({
      contacts: contacts,
      query: q || "",
    }),
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
