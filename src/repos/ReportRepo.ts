import { randomUUID } from "crypto";
import orm from "./MockOrm";
import { Report } from "@src/models/report";

// **** Functions **** //

/**
 * Get one report.
 */
async function getOne(id: string): Promise<Report | null> {
  const db = await orm.openDb();
  for (const report of db.reports) {
    if (report.id === id) {
      return report;
    }
  }
  return null;
}

/**
 * See if a report with the given id exists.
 */
async function persists(id: string): Promise<boolean> {
  const db = await orm.openDb();
  for (const report of db.reports) {
    if (report.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all reports.
 */
async function getAll(): Promise<Report[]> {
  const db = await orm.openDb();
  return db.reports;
}

/**
 * Add one report.
 */
async function add(report: Report): Promise<void> {
  const db = await orm.openDb();
  report.id = randomUUID();
  db.reports.push(report);
  return orm.saveDb(db);
}

/**
 * Update a report.
 */
async function update(report: Report): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.reports.length; i++) {
    if (db.reports[i].id === report.id) {
      db.reports[i] = report;
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one report.
 */
async function delete_(id: string): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.reports.length; i++) {
    if (db.reports[i].id === id) {
      db.reports.splice(i, 1);
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
