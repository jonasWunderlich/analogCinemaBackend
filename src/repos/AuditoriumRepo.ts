import orm from "./MockOrm";
import { Auditorium } from "@src/models/auditorium";
import { randomUUID } from "crypto";

// **** Functions **** //

/**
 * Get one auditorium.
 */
async function getOne(id: string): Promise<Auditorium | null> {
  const db = await orm.openDb();
  for (const auditorium of db.auditoriums) {
    if (auditorium.id === id) {
      return auditorium;
    }
  }
  return null;
}

/**
 * See if a auditorium with the given id exists.
 */
async function persists(id: string): Promise<boolean> {
  const db = await orm.openDb();
  for (const auditorium of db.auditoriums) {
    if (auditorium.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all auditoriums.
 */
async function getAll(): Promise<Auditorium[]> {
  const db = await orm.openDb();
  return db.auditoriums;
}

/**
 * Add one auditorium.
 */
async function add(auditorium: Auditorium): Promise<void> {
  const db = await orm.openDb();
  auditorium.id = randomUUID();
  db.auditoriums.push(auditorium);
  return orm.saveDb(db);
}

/**
 * Update a auditorium.
 */
async function update(auditorium: Auditorium): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.auditoriums.length; i++) {
    if (db.auditoriums[i].id === auditorium.id) {
      db.auditoriums[i] = auditorium;
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one auditorium.
 */
async function delete_(id: string): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.auditoriums.length; i++) {
    if (db.auditoriums[i].id === id) {
      db.auditoriums.splice(i, 1);
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
