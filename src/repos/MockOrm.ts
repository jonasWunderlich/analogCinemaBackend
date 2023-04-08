import jsonfile from "jsonfile";

import { IUser } from "@src/models/User";
import { ScreeningEvent } from "@src/models/screening-event";
import { Report } from "@src/models/report";
import { Projection } from "@src/models/projection";
import { Cinema } from "@src/models/cinema";
import { Auditorium } from "@src/models/auditorium";

// **** Variables **** //

const DB_FILE_NAME = "database.json";

// **** Types **** //

interface IDb {
  users: IUser[];
  screeningEvents: ScreeningEvent[];
  reports: Report[];
  projections: Projection[];
  cinemas: Cinema[];
  auditoriums: Auditorium[];
}

// **** Functions **** //

/**
 * Fetch the json from the file.
 */
function openDb(): Promise<IDb> {
  return jsonfile.readFile(__dirname + "/" + DB_FILE_NAME) as Promise<IDb>;
}

/**
 * Update the file.
 */
function saveDb(db: IDb): Promise<void> {
  return jsonfile.writeFile(__dirname + "/" + DB_FILE_NAME, db);
}

// **** Export default **** //

export default {
  openDb,
  saveDb,
} as const;
