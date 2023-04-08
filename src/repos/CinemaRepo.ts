import orm from "./MockOrm";
import { Cinema } from "@src/models/cinema";
import { randomUUID } from "crypto";

// **** Functions **** //

/**
 * Get one cinema.
 */
async function getOne(id: string): Promise<Cinema | null> {
  const db = await orm.openDb();
  for (const cinema of db.cinemas) {
    if (cinema.id === id) {
      return cinema;
    }
  }
  return null;
}

/**
 * See if a cinema with the given id exists.
 */
async function persists(id: string): Promise<boolean> {
  const db = await orm.openDb();
  for (const cinema of db.cinemas) {
    if (cinema.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all cinemas.
 */
async function getAll(): Promise<Cinema[]> {
  const db = await orm.openDb();
  return db.cinemas;
}

/**
 * Add one cinema.
 */
async function add(cinema: Cinema): Promise<void> {
  const db = await orm.openDb();
  cinema.id = randomUUID();
  db.cinemas.push(cinema);
  return orm.saveDb(db);
}

/**
 * Update a cinema.
 */
async function update(cinema: Cinema): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.cinemas.length; i++) {
    if (db.cinemas[i].id === cinema.id) {
      db.cinemas[i] = cinema;
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one cinema.
 */
async function delete_(id: string): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.cinemas.length; i++) {
    if (db.cinemas[i].id === id) {
      db.cinemas.splice(i, 1);
      return orm.saveDb(db);
    }
  }
}

// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;
