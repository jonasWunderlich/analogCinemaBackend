import orm from "./MockOrm";
import { Projection } from "@src/models/projection";
import { randomUUID } from "crypto";

// **** Functions **** //

/**
 * Get one projection.
 */
async function getOne(id: string): Promise<Projection | null> {
  const db = await orm.openDb();
  for (const projection of db.projections) {
    if (projection.id === id) {
      return projection;
    }
  }
  return null;
}

/**
 * See if a projection with the given id exists.
 */
async function persists(id: string): Promise<boolean> {
  const db = await orm.openDb();
  for (const projection of db.projections) {
    if (projection.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all projections.
 */
async function getAll(): Promise<Projection[]> {
  const db = await orm.openDb();
  return db.projections;
}

/**
 * Add one projection.
 */
async function add(projection: Projection): Promise<void> {
  const db = await orm.openDb();
  projection.id = randomUUID();
  db.projections.push(projection);
  return orm.saveDb(db);
}

/**
 * Update a projection.
 */
async function update(projection: Projection): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.projections.length; i++) {
    if (db.projections[i].id === projection.id) {
      db.projections[i] = projection;
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one projection.
 */
async function delete_(id: string): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.projections.length; i++) {
    if (db.projections[i].id === id) {
      db.projections.splice(i, 1);
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
