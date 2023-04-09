import ScreeningEventRepo from "@src/repos/ScreeningEventRepo";
import { RouteError } from "@src/other/classes";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import ScreeningEvent, {
  IScreeningEvent,
  IScreeningEventCreate,
} from "@src/models/ScreeningEvent";
import EventSchema from "@src/schemas/EventSchema";

// **** Variables **** //

export const SCREENING_EVENT_NOT_FOUND_ERR = "ScreeningEvent not found";
export const SCREENING_EVENT_INVALID_ERR = "ScreeningEvent has invalid data";
// **** Functions **** //

/**
 * Get all screeningEvents.
 */
function getAll(): Promise<IScreeningEvent[]> {
  return ScreeningEventRepo.getAll();
}

/**
 * Add one screeningEvent.
 */
async function addOne(screeningEvent: IScreeningEventCreate): Promise<void> {
  const validate = (await EventSchema.validateCreateScreeningEvent(
    screeningEvent
  )) as Promise<void>;
  if (!validate) {
    throw new RouteError(
      HttpStatusCodes.BAD_REQUEST,
      SCREENING_EVENT_INVALID_ERR
    );
  }
  return ScreeningEventRepo.add(ScreeningEvent.new(screeningEvent));
}

/**
 * Update one screeningEvent.
 */
async function updateOne(screeningEvent: IScreeningEvent): Promise<void> {
  const persists = await ScreeningEventRepo.persists(screeningEvent.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SCREENING_EVENT_NOT_FOUND_ERR
    );
  }
  const validate = (await EventSchema.validateUpdateScreeningEvent(
    screeningEvent
  )) as Promise<void>;
  if (!validate) {
    throw new RouteError(
      HttpStatusCodes.BAD_REQUEST,
      SCREENING_EVENT_INVALID_ERR
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
