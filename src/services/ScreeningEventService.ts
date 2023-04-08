import ScreeningEventRepo from "@src/repos/ScreeningEventRepo";
import { RouteError } from "@src/other/classes";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { ScreeningEvent } from "@src/models/screening-event";

// **** Variables **** //

export const SCREENING_EVENT_NOT_FOUND_ERR = "ScreeningEvent not found";

// **** Functions **** //

/**
 * Get all screeningEvents.
 */
function getAll(): Promise<ScreeningEvent[]> {
  return ScreeningEventRepo.getAll();
}

/**
 * Add one screeningEvent.
 */
function addOne(screeningEvent: ScreeningEvent): Promise<void> {
  return ScreeningEventRepo.add(screeningEvent);
}

/**
 * Update one screeningEvent.
 */
async function updateOne(screeningEvent: ScreeningEvent): Promise<void> {
  const persists = await ScreeningEventRepo.persists(screeningEvent.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SCREENING_EVENT_NOT_FOUND_ERR
    );
  }
  // Return screeningEvent
  return ScreeningEventRepo.update(screeningEvent);
}

/**
 * Delete a screeningEvent by their id.
 */
async function _delete(id: string): Promise<void> {
  const persists = await ScreeningEventRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SCREENING_EVENT_NOT_FOUND_ERR
    );
  }
  // Delete screeningEvent
  return ScreeningEventRepo.delete(id);
}

// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
