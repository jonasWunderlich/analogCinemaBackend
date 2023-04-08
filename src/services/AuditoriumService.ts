import { RouteError } from "@src/other/classes";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { Auditorium } from "@src/models/auditorium";
import AuditoriumRepo from "@src/repos/AuditoriumRepo";

// **** Variables **** //

export const SCREENING_EVENT_NOT_FOUND_ERR = "Auditorium not found";

// **** Functions **** //

/**
 * Get all auditoriums.
 */
function getAll(): Promise<Auditorium[]> {
  return AuditoriumRepo.getAll();
}

/**
 * Add one auditorium.
 */
function addOne(auditorium: Auditorium): Promise<void> {
  return AuditoriumRepo.add(auditorium);
}

/**
 * Update one auditorium.
 */
async function updateOne(auditorium: Auditorium): Promise<void> {
  const persists = await AuditoriumRepo.persists(auditorium.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SCREENING_EVENT_NOT_FOUND_ERR
    );
  }
  // Return auditorium
  return AuditoriumRepo.update(auditorium);
}

/**
 * Delete a auditorium by their id.
 */
async function _delete(id: string): Promise<void> {
  const persists = await AuditoriumRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SCREENING_EVENT_NOT_FOUND_ERR
    );
  }
  // Delete auditorium
  return AuditoriumRepo.delete(id);
}

// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
