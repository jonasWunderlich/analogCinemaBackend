import jsonfile from "jsonfile";

import { IUser } from "@src/models/User";
import { IScreeningEvent } from "@src/models/ScreeningEvent";
import { IAuditorium } from "@src/models/Auditorium";
import { ICinema } from "@src/models/Cinema";
import { IProjection } from "@src/models/Projection";
import { IReport } from "@src/models/Report";

// **** Variables **** //

const DB_FILE_NAME = "database.json";

// **** Types **** //

interface IDb {
  users: IUser[];
  screeningEvents: IScreeningEvent[];
  reports: IReport[];
  projections: IProjection[];
  cinemas: ICinema[];
  auditoriums: IAuditorium[];
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
