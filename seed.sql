ATTACH DATABASE 'contacts.db' AS ContactsDB;

INSERT INTO ContactsDB.Contacts (first, last, phone, email) VALUES
  ('Barry', 'Cuda', '555-1234', 'barry.cuda@example.com'),
  ('Ivana', 'Tinkle', '555-5678', 'ivana.tinkle@example.com'),
  ('Ben', 'Dover', '555-9012', 'ben.dover@example.com');
