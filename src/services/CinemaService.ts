import CinemaRepo from "@src/repos/CinemaRepo";
import { RouteError } from "@src/other/classes";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { Cinema } from "@src/models/cinema";

// **** Variables **** //

export const SCREENING_EVENT_NOT_FOUND_ERR = "Cinema not found";

// **** Functions **** //

/**
 * Get all cinemas.
 */
function getAll(): Promise<Cinema[]> {
  return CinemaRepo.getAll();
}

/**
 * Add one cinema.
 */
function addOne(cinema: Cinema): Promise<void> {
  return CinemaRepo.add(cinema);
}

/**
 * Update one cinema.
 */
async function updateOne(cinema: Cinema): Promise<void> {
  const persists = await CinemaRepo.persists(cinema.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SCREENING_EVENT_NOT_FOUND_ERR
    );
  }
  // Return cinema
  return CinemaRepo.update(cinema);
}

/**
 * Delete a cinema by their id.
 */
async function _delete(id: string): Promise<void> {
  const persists = await CinemaRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SCREENING_EVENT_NOT_FOUND_ERR
    );
  }
  // Delete cinema
  return CinemaRepo.delete(id);
}

// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;