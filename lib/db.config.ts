import Dexie from "dexie";

const database = new Dexie("database");
database.version(1).stores({
  players: "++id, name",
});

export const playersTable = database.table("players");

export default database;
