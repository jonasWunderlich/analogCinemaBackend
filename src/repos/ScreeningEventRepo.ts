import orm from './MockOrm';
import { IScreeningEvent } from '@src/models/ScreeningEvent';

// **** Functions **** //

/**
 * Get one screeningEvent.
 */
async function getOne(id: string): Promise<IScreeningEvent | null> {
  const db = await orm.openDb();
  for (const screeningEvent of db.screeningEvents) {
    if (screeningEvent.id === id) {
      return screeningEvent;
    }
  }
  return null;
}

/**
 * See if a screeningEvent with the given id exists.
 */
async function persists(id: string): Promise<boolean> {
  const db = await orm.openDb();
  for (const screeningEvent of db.screeningEvents) {
    if (screeningEvent.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all screeningEvents.
 */
async function getAll(): Promise<IScreeningEvent[]> {
  const db = await orm.openDb();
  return db.screeningEvents;
}

/**
 * Add one screeningEvent.
 */
async function add(screeningEvent: IScreeningEvent): Promise<void> {
  const db = await orm.openDb();
  db.screeningEvents.push(screeningEvent);
  return orm.saveDb(db);
}

/**
 * Update a screeningEvent.
 */
async function update(screeningEvent: IScreeningEvent): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.screeningEvents.length; i++) {
    if (db.screeningEvents[i].id === screeningEvent.id) {
      db.screeningEvents[i] = screeningEvent;
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one screeningEvent.
 */
async function delete_(id: string): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.screeningEvents.length; i++) {
    if (db.screeningEvents[i].id === id) {
      db.screeningEvents.splice(i, 1);
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
