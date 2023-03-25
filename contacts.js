const path = require("path");
const fs = require("fs/promises");
import { uid } from "uid";

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  try {
    const text = await fs.readFile(contactsPath, "utf-8");
    console.log(text);
  } catch (error) {
    console.log(error.message);
  }

  // ...твой код
};
